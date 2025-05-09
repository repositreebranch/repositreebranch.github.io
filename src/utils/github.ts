interface TreeNode {
  name: string;
  type: 'file' | 'directory';
  children?: TreeNode[];
}

export async function fetchRepoStructure(repoUrl: string): Promise<TreeNode> {
  
  const urlParts = repoUrl.split('/');
  const owner = urlParts[urlParts.length - 2];
  const repo = urlParts[urlParts.length - 1];

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch repository data');
  }

  const data = await response.json();
  return processGitHubTree(data.tree);
}

function processGitHubTree(items: any[]): TreeNode {
  const root: TreeNode = {
    name: 'root',
    type: 'directory',
    children: [],
  };

  items.forEach((item) => {
    const parts = item.path.split('/');
    let current = root;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        //File
        current.children = current.children || [];
        current.children.push({
          name: part,
          type: 'file',
        });
      } else {
        //Directory
        current.children = current.children || [];
        let dir = current.children.find(
          (child) => child.name === part && child.type === 'directory'
        );
        if (!dir) {
          dir = {
            name: part,
            type: 'directory',
            children: [],
          };
          current.children.push(dir);
        }
        current = dir;
      }
    });
  });

  return root;
}