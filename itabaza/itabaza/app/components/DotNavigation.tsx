import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

// Define the pages data
const { width } = Dimensions.get('window');
const pages = [
  { id: '1', title: 'Page 1' },
  { id: '2', title: 'Page 2' },
  { id: '3', title: 'Page 3' }
];

// Use ViewToken from react-native
import { ViewToken } from 'react-native';

// Define the type for the props
interface DotNavigationProps {
  currentPosition: number; // Expecting currentPosition to be a number
}

const DotNavigation: React.FC<DotNavigationProps> = ({ currentPosition }) => {
  const [currentIndex, setCurrentIndex] = useState(currentPosition);

  useEffect(() => {
    setCurrentIndex(currentPosition);
  }, [currentPosition]);

  // Correctly typed onViewableItemsChanged
  const handleViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];
    if (visibleItem) {
      setCurrentIndex(visibleItem.index ?? 0); // Default to 0 if index is null
    }
  };

  // Render dot for navigation
  const renderDot = (index: number) => {
    return (
      <View
        key={index}
        style={[
          styles.dot,
          { opacity: index === currentIndex ? 1 : 0.5 } // Highlight the active dot
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList for pages */}
      <FlatList
        data={pages}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={{ display: 'none' }}>{item.title}</Text>
          </View>
        )}
        onViewableItemsChanged={handleViewableItemsChanged} // Correct handler
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      {/* Dots Navigation */}
      <View style={styles.dotContainer}>
        {pages.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    margin: 5,
    marginBottom: 7,
    backgroundColor: '#fff',
  },
});

export default DotNavigation;
