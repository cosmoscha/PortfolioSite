export const styles = {
  // Page Container and Transition
  carousel: {
    container: "mb-8",
    header: "flex items-center gap-4 mb-4",
    searchInput: "px-4 py-2 rounded-full bg-[#1A2B4C]/10 dark:bg-[#00E5FF]/10 border border-[#7B4CFF]/20 dark:border-[#00E5FF]/20 focus:outline-none focus:ring-2 focus:ring-[#7B4CFF] dark:focus:ring-[#00E5FF] placeholder:text-[#1A2B4C]/40 dark:placeholder:text-[#00E5FF]/40 text-sm w-40 transition-all duration-300 focus:w-48",
    searchIcon: "w-4 h-4 text-[#1A2B4C]/40 dark:text-[#00E5FF]/40",
    carouselWrapper: "relative overflow-hidden",
    gradientLeft: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A2B4C]/90 dark:from-[#00E5FF]/10 to-transparent z-10",
    gradientRight: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A2B4C]/90 dark:from-[#00E5FF]/10 to-transparent z-10",
    scrollContainer: "flex gap-8 overflow-x-auto hide-scrollbar py-4 cursor-grab active:cursor-grabbing select-none",
    itemContainer: "flex flex-col items-center flex-shrink-0 w-24 transition-transform duration-300 hover:scale-110",
    itemImage: "h-12 w-12 mb-2 drop-shadow-lg",
    itemText: "text-[#1A2B4C] dark:text-[#00E5FF] text-sm text-center pointer-events-none"
  },
  firstProjectMobile: "pt-20",
  pageContainer: "w-full max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-[#1A2B4C]/30 rounded-lg shadow-lg relative z-10",
  contentSection: "space-y-4 px-6",
  mobileSpacing: "sm:pt-24",
  projectCard: "bg-white/30 dark:bg-[#1A2B4C]/30 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gray-200/30 dark:border-[#7B4CFF]/30",
  pageTransition: {
    base: "transition-opacity duration-500 ease-in-out transform",
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 translate-y-5"
  },
  typography: {
    headerPrimary: "text-[#1A2B4C] dark:text-white text-3xl sm:text-4xl font-bold mb-6 text-center pt-6 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
    headerSecondary: "text-[#1A2B4C] dark:text-white text-xl font-bold mb-2 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
    textBase: "text-[#1A2B4C] dark:text-white text-base sm:text-lg [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]"
  },

  // Project text styles
  projectTitle: "text-xl font-semibold mb-2 text-[#1A2B4C] dark:text-white [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
  projectText: "text-[#1A2B4C]/80 dark:text-gray-300 mb-4 [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.5),_1px_-1px_0_rgba(255,255,255,0.5),_-1px_1px_0_rgba(255,255,255,0.5),_1px_1px_0_rgba(255,255,255,0.5)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.5),_1px_-1px_0_rgba(0,0,0,0.5),_-1px_1px_0_rgba(0,0,0,0.5),_1px_1px_0_rgba(0,0,0,0.5)]",
  projectLink: "text-[#7B4CFF] hover:underline break-words [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.8),_1px_-1px_0_rgba(255,255,255,0.8),_-1px_1px_0_rgba(255,255,255,0.8),_1px_1px_0_rgba(255,255,255,0.8)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]",
  technologyTag: "px-3 py-1 bg-[#00E5FF]/10 dark:bg-[#00E5FF]/20 text-[#1A2B4C] dark:text-[#00E5FF] rounded-full text-sm [text-shadow:_-1px_-1px_0_rgba(255,255,255,0.5),_1px_-1px_0_rgba(255,255,255,0.5),_-1px_1px_0_rgba(255,255,255,0.5),_1px_1px_0_rgba(255,255,255,0.5)] dark:[text-shadow:_-1px_-1px_0_rgba(0,0,0,0.5),_1px_-1px_0_rgba(0,0,0,0.5),_-1px_1px_0_rgba(0,0,0,0.5),_1px_1px_0_rgba(0,0,0,0.5)]",
  projectGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4",
  components: {
    card: "bg-white/30 dark:bg-[#1A2B4C]/30 p-4 rounded-lg",
    themeButton: "p-2 rounded-full hover:bg-white/20 dark:hover:bg-[#1A2B4C]/50 transition-colors duration-300",
    glassEffect: "backdrop-blur-md bg-white/30 dark:bg-[#1A2B4C]/30",
    glassBorder: "border-[#1A2B4C]/20 dark:border-[#00E5FF]/20",
    navLink: "hover:text-[#7B4CFF] dark:hover:text-[#00E5FF] transition-colors duration-300",
  },

  layout: {
    header: "w-full py-4 fixed top-0 left-0 right-0 z-30 border-b",
    footer: "w-full py-4 mt-auto fixed bottom-0 left-0 right-0 z-30 border-t",
    sidebar: "fixed top-0 left-0 h-screen z-30 transition-all duration-300 ease-in-out flex flex-col",
    mainContent: "flex-1 relative overflow-y-auto",
    ontentContainer: "min-h-screen pb-16",
    contentArea: "flex-1 overflow-y-auto pt-16",
  },

  footer: {
    container: "container mx-auto relative px-4",
    wrapper: "ml-16 px-4", // Matches sidebar width
    content: "flex flex-col sm:flex-row items-center justify-between",
    text: "text-sm md:text-base mb-2 sm:mb-0",
    brand: "font-semibold text-[#1A2B4C] dark:text-[#00E5FF]",
    linkSection: "flex items-center gap-4",
    icon: "h-5 w-5 text-[#1A2B4C] dark:text-[#00E5FF]",
    themeButton: "ml-2 p-2 rounded-full hover:bg-[#7B4CFF]/10 dark:hover:bg-[#00E5FF]/10 transition-colors duration-300"
  },

  sidebar: {
    base: "fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out z-50",
    container: "bg-white/80 dark:bg-[#1A2B4C]/80 backdrop-blur-md border-r border-[#1A2B4C]/20 dark:border-[#00E5FF]/20",
    expanded: "w-64",
    collapsed: "w-16",
    mobile: "relative",
    fixed: "fixed",

    overlay: "fixed inset-0 bg-black/50 z-40",

    toggleButton: {
      wrapper: "absolute -right-10 top-4 p-2 rounded-r-lg bg-white/80 dark:bg-[#1A2B4C]/80 backdrop-blur-md border border-[#1A2B4C]/20 dark:border-[#00E5FF]/20",
      icon: "h-5 w-5 text-[#1A2B4C] dark:text-[#00E5FF]"
    },

    header: {
      container: "p-4 flex items-center justify-center",
      text: "text-[#1A2B4C] dark:text-[#00E5FF] text-2xl font-semibold"
    },

    nav: {
      list: "px-2 space-y-2",
      item: {
        base: "flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full",
        active: "bg-[#7B4CFF]/80 text-white",
        inactive: "text-[#1A2B4C] hover:bg-[#7B4CFF]/10 dark:text-[#00E5FF] dark:hover:bg-[#00E5FF]/10",
        expanded: "justify-start",
        collapsed: "justify-center",
        icon: "h-5 w-5",
        text: "ml-4 whitespace-nowrap"
      }
    },

    auth: {
      container: "p-4",
      button: {
        base: "flex items-center px-3 py-2 rounded-lg transition-all duration-300 text-[#1A2B4C] hover:bg-[#7B4CFF]/10 dark:text-[#00E5FF] dark:hover:bg-[#00E5FF]/10",
        expanded: "w-full justify-start",
        collapsed: "justify-center w-10 mx-auto",
        icon: "h-5 w-5",
        text: "ml-4 whitespace-nowrap"
      }
    }
  },


  // Project styles
  mainWrapper: "relative min-h-screen w-full",
  pageContentWrapper: "relative pt-32 px-4 pb-8 overflow-y-auto",
  projectContainer: "w-full max-w-6xl mx-auto sm:mx-4 md:mx-8 lg:mx-auto relative",
  pageContentPadding: "pt-32 sm:pt-20",
}