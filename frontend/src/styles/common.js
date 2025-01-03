export const styles = {
  // Page Container and Transition
  firstProjectMobile: "pt-20",
  pageContainer: "w-full max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-lg shadow-lg relative z-10",
  contentSection: "space-y-4 px-6",
  mobileSpacing: "sm:pt-24",
  projectCard: "bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30",
  pageTransition: {
    base: "transition-opacity duration-500 ease-in-out transform",
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 translate-y-5"
  },
    typography: {
    headerPrimary: "text-gray-800 dark:text-gray-200 text-3xl sm:text-4xl font-bold mb-6 text-center pt-6 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
    headerSecondary: "text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
    textBase: "text-gray-800 dark:text-gray-200 text-base sm:text-lg [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]"
  },

  // Project text styles
  projectTitle: "text-xl font-semibold mb-2 text-gray-900 dark:text-white [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
  projectText: "text-gray-600 dark:text-gray-300 mb-4 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.5),_1px_-1px_0_rgba(255,255,255,0.5),_-1px_1px_0_rgba(255,255,255,0.5),_1px_1px_0_rgba(255,255,255,0.5)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.5),_1px_-1px_0_rgba(0,0,0,0.5),_-1px_1px_0_rgba(0,0,0,0.5),_1px_1px_0_rgba(0,0,0,0.5)]",
  projectLink: "text-blue-500 hover:underline break-words [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
  technologyTag: "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.5),_1px_-1px_0_rgba(255,255,255,0.5),_-1px_1px_0_rgba(255,255,255,0.5),_1px_1px_0_rgba(255,255,255,0.5)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.5),_1px_-1px_0_rgba(0,0,0,0.5),_-1px_1px_0_rgba(0,0,0,0.5),_1px_1px_0_rgba(0,0,0,0.5)]",
  projectGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4",
  components: {
    card: "bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg",
    navLink: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
    themeButton: "p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors duration-300",
    glassEffect: "backdrop-blur-md bg-white/30 dark:bg-gray-900/30",
    glassBorder: "border-white/20 dark:border-gray-700/50"
  },
  layout: {
    header: "w-full py-4 fixed top-0 left-0 right-0 z-30 border-b", // Mirror of footer
    footer: "w-full py-4 mt-auto fixed bottom-0 left-0 right-0 z-30 border-t",
    sidebar: "fixed top-0 left-0 h-screen z-30 transition-all duration-300 ease-in-out flex flex-col",
    footer: "w-full py-4 mt-auto fixed bottom-0 left-0 right-0 z-30 border-t",
    mainContent: "flex-1 relative overflow-y-auto",
    ontentContainer: "min-h-screen pb-16",
    contentArea: "flex-1 overflow-y-auto pt-16",
  },

  // Project styles - these will now be used across Home and About too
  mainWrapper: "relative min-h-screen w-full", // Wrapper for entire page
  pageContentWrapper: "relative pt-32 px-4 pb-8 overflow-y-auto", // Container for scrollable content
  projectContainer: "w-full max-w-6xl mx-auto sm:mx-4 md:mx-8 lg:mx-auto relative", // Keep existing
  pageContentPadding: "pt-32 sm:pt-20", // Adjusted padding for fixed header



};