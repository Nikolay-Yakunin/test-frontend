interface Project {
                "id": number,
                "title": string,
                "slug": string,
                "project_url": null,
                "image": string,
                "image_dark": string,
                "description": string,
                "geo": {
                    "lat": null,
                    "lng": null
                },
                "categories": [
                    {
                        "id": number,
                        "name": string
                    }
                ]
            }

type ProjectsCategories = {
    id: number;
    name: string;
}

export const getProjects = async () => {
    try {
        const projectUrl = process.env.PROJECT_URL;
        if (!projectUrl) {
          throw new Error('PROJECT_URL is not defined in the environment variables');
        }
    
        const res = await fetch(projectUrl);
        const projects: Project[] = await res.json();
        return projects;
    } catch (error) {
        throw new Error('Failed to fetch projects');
    }
  }

export const getProjectsCategories = async () => {
    try {
        const categoriesUrl = process.env.CATEGORIES_URL;
        if (!categoriesUrl) {
          throw new Error('CATEGORIES_URL is not defined in the environment variables');
        }
    
        const res = await fetch(categoriesUrl);
        const categories: ProjectsCategories[] = await res.json();
        return categories;
    } catch (error) {
        throw new Error('Failed to fetch projects categories');
    }
  }