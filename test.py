import random

def quicksort_median3(arr):
    if len(arr) <= 1:
        return arr
 
    # Choose pivot as the median of the first, middle, and last element
    mid = len(arr) // 2
    first, last = arr[0], arr[-1]
    pivot = sorted([first, arr[mid], last])[1]
    
    # Partition the array
    left, right, equal = [], [], []
    for x in arr:
        if x < pivot:
            left.append(x)
        elif x > pivot:
            right.append(x)
        else:
            equal.append(x)
    
    # Recursively sort the left and right partitions
    left = quicksort_median3(left)
    right = quicksort_median3(right)
    
    # Combine the sorted partitions with the pivot element
    return left + equal + right

#---------------------------TEST-------------------

# Generate a random list of unsorted numbers
arr = [random.randint(0, 100) for i in range(10)]

# Sort the list using quicksort_median3
sorted_arr = quicksort_median3(arr)

# Check that the list is sorted correctly
assert sorted_arr == sorted(arr), f"Sorting failed: expected {sorted(arr)}, but got {sorted_arr}"