import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';

const {width} = Dimensions.get('window');
const pages = [
  { id: '1', title:'Page 1' },
  { id: '2',title:'Page 2' },
  { id: '3',title:'Page 3' }
];

// const DotNavigation = ({currentPosition}) => {
//   const [currentIndex, setCurrentIndex] = useState(currentPosition);
//   useEffect(() => {
//     setCurrentIndex(currentPosition);
//   }, [currentPosition]);
//   // Handle page change
//   const handleViewableItemsChanged = ({ viewableItems }) => {
//     const visibleItem = viewableItems[0];
//     if (visibleItem) {
//       setCurrentIndex(visibleItem.index);
//     }
//   };

//   const renderDot = (index) => {
//     return (
//       <View
//         key={index}
//         style={[
//           styles.dot,
//           {opacity:index === currentIndex? 1 : 0.5 }
//         ]}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* FlatList for pages */}
//       <FlatList
//         data={pages}
//         horizontal
//         pagingEnabled
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View>
//             <Text style={{display:'none'}}>{item.title}</Text>
//           </View>
//         )}
//         onViewableItemsChanged={handleViewableItemsChanged}
//         viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
//       />

//       {/* Dots Navigation */}
//       <View style={styles.dotContainer}>
//         {pages.map((_, index) => renderDot(index))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   pageText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 5,
//     margin:5,
//     marginBottom:7,
//     backgroundColor:'#fff'
//   },
// });

// export default DotNavigation;
// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window'); // Get screen width

// const pages = [
//   { id: '1', title: 'Page 1' },
//   { id: '2', title: 'Page 2' },
//   { id: '3', title: 'Page 3' },
// ];

// const DotNavigation = ({ currentIndex }) => {
//   const renderDot = (index) => (
//     <View
//       key={index}
//       style={[
//         styles.dot,
//         { opacity: index === currentIndex ? 1 : 0.5 }, // Highlight the active dot
//       ]}
//     />
//   );

//   return (
//     <View style={styles.dotContainer}>
//       {pages.map((_, index) => renderDot(index))}
//     </View>
//   );
// };

const DotNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    // Calculate the current index based on the horizontal scroll position
    const position = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(position);
  };

  return (
    <View style={styles.container}>
      {/* Pages */}
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16} // Throttle scroll events for better performance
        showsHorizontalScrollIndicator={false}
      >
        {pages.map((page) => (
          <View key={page.id} style={styles.page}>
            <Text style={styles.pageText}>{page.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dot Navigation */}
      <DotNavigation currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002D62',
  },
  page: {
    width, // Full screen width for each page
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
});

export default DotNavigation;
