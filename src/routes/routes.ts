const routes = {
  home: '/',
  projects: '/projects',
  project: (id: string) => `/projects/${id}`,
  review: (id: string) => `/review/${id}`,
}

export default routes
