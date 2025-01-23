function binarySearch(list, element) {
    var mid,
    index = 0;

    while(list.length != 0) {
        //Find middle index
        if(list.length%2 == 1) {
            mid = (list.length-1)/2;
        }
        else {mid = list.length/2-1;}

        //Search list
        if(element == list[mid]) {
            index+=mid;
            return index;
        }
        else if(element < list[mid]) {
            list = list.slice(0, mid);
        }
        else if(element > list[mid]) {
            index+=mid+1;
            list = list.slice(mid+1, list.length);
        }
        else {break;}
    }
        return -1;
}