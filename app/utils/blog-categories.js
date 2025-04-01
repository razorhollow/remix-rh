// app/utils/blog-categories.js

export const CATEGORIES = [
    { 
      id: "digital-presence", 
      name: "Digital Presence",
      description: "Build and maintain a professional online presence that attracts clients to your guide service.",
      icon: "🖥️",
      color: "blue"
    },
    { 
      id: "business-operations", 
      name: "Business Operations",
      description: "Run a more efficient, profitable guide business with the right tools and systems.",
      icon: "📊",
      color: "green"
    },
    { 
      id: "marketing-strategies", 
      name: "Marketing Strategies",
      description: "Attract more clients and bookings with proven marketing approaches for guide services.",
      icon: "📣",
      color: "orange"
    },
    { 
      id: "technology-field", 
      name: "Technology for the Field",
      description: "Use the right tech and tools when you're out on the water or in the woods.",
      icon: "📱",
      color: "purple"
    },
  ];
  
  export const getCategoryById = (id) => {
    return CATEGORIES.find(category => category.id === id) || {
      id: "uncategorized",
      name: "Uncategorized",
      description: "General articles about outdoor guide services.",
      icon: "📄",
      color: "gray"
    };
  };
  
  export const getColorClass = (categoryId) => {
    const colorMap = {
      "digital-presence": "blue",
      "business-operations": "green", 
      "marketing-strategies": "orange",
      "technology-field": "purple",
      "uncategorized": "gray"
    };
    
    const color = colorMap[categoryId] || "gray";
    
    return {
      bg: `bg-${color}-100`,
      text: `text-${color}-800`,
      border: `border-${color}-200`,
      hoverBg: `hover:bg-${color}-200`
    };
  };