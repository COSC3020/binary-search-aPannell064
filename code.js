function binarySearch(list, element) {
    var mid,
    index = 0;

    while(list.length > 0) {
        //Find middle index
        if(list.length%2 == 1) {
            mid = (list.length-1)/2;
        }
        else {mid = list.length/2-1;}

        /*Search the list
        Making sure that the list length goes to 1 
        ensures the first instance of the element is returned. */
        if(list.length == 1 && element == list[mid]) {
            return index;
        }
        else if(element > list[mid]) {
            index+=mid+1;
            list = list.slice(mid+1, list.length);
        }
        else {
            list = list.slice(0, mid + 1);
        }
    }
        return -1;
}
