function assignment1(){
            let prices = [250,150,400,100,300];
            let total=0;
            for(let i=0;i<prices.length;i++){
                total+=prices[i];
            }
            document.write("The total for the input  [250,150,400,100,300] : "+total);
        }
        function assignment2(){
            let marks = [45, 67, 89, 32, 56, 78, 90, 66, 74, 50];
            let max =0;
            let min=0;
            for(let i=0;i<marks.length;i++){
                if(marks[i]>max){
                    max=marks[i];
                }
                if(marks[i]<min || min===0){
                    min=marks[i];
                }
            }
            document.write("The maximum marks are for the input [45, 67, 89, 32, 56, 78, 90, 66, 74, 50] is : "+max+"<br>");
            document.write("The minimum marks are for the input [45, 67, 89, 32, 56, 78, 90, 66, 74, 50] is : "+min+"<br>");
        }
        function assignment3(){
            let temps = [32, 34, 31, 29, 28, 30, 33];
            let sum =0;
            for(let i=0;i<temps.length;i++){
                sum+=temps[i];
            }
            let avg = sum/temps.length;
            document.write("The average temperature for the input [32, 34, 31, 29, 28, 30, 33] is : "+avg);
        }
        function assignment4(){
            let rollNumbers = [101, 102, 103, 104, 105, 106, 107];
            let oddNumbers=[];
            let evenNumbers =[];
            for(let i=0;i<rollNumbers.length;i++){
                if(rollNumbers[i]%2===0){
                    evenNumbers.push(rollNumbers[i]);
                }
                else{
                    oddNumbers.push(rollNumbers[i]);
                }
            }
            document.write("The even numbers are: "+evenNumbers+"<br>");
            document.write("The odd numbers are: "+oddNumbers+"<br>");
        }
        function assignment5(){
            let products = ["Laptop", "Mobile", "Tablet", "Keyboard", "Mouse"];
            for(let i=0;i<products.length;i++){
                if(products[i] == "Tablet"){
                    document.write("Product found in the array  [Laptop, Mobile, Tablet, Keyboard, Mouse]:");
                    return;
                }
            }
        }
        function assignment6(){
            let playlist = ["Song1", "Song2", "Song3", "Song4", "Song5"];
            playlist.reverse();
            document.write("Reversed playlist for the input [Song1, Song2, Song3, Song4, Song5]: "+playlist);

        }
        function assignment7(){
            let visitors = [101, 102, 103, 101, 104, 102, 105];
            let setVisitors = new Set(visitors);
            document.write("Unique visitor IDs for the input [101, 102, 103, 101, 104, 102, 105]: "+Array.from(setVisitors));
        }
        function assignment8(){
            let count=0;
            let borrowed = [2, 5, 0, 3, 1, 4, 0, 6];
            for(let i=0;i<borrowed.length;i++){
                if(borrowed[i]===0){
                    count++;
                }
            }

            document.write("The Students who didn't boroow books is : "+count);


        }
        function assignment9(){
            let netprofit=0;
            let changes = [100, -50, 200, -150, 300, -100];
            for(let i=0;i<changes.length;i++){
                netprofit+=changes[i];
            }
            document.write("The Net profit is : "+netprofit)

        }
        function assignment10(){
            let names = ["Amit", "Suresh", "Rohan", "Priyanka", "Anjali", "Ravi"];
            for(let i=0;i<names.length;i++){
                if(names[i].length>5){
                    document.write(names[i]+"<br>");
                }

            }
            document.write("These are the names more than 5 characters ");
        }