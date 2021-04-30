var today = new Date();
var hrs = today.getHours();
    document.writeln('<b>');
    document.writeln('<b>');
    if (hrs >= 0 && hrs < 12)
    {
        document.write('<h1> Hello , <br> Good Morning! </h1>');
    } 
    else if (hrs == 12)
    {
        document.write('<h1> Hello , <br> Good Noon! </h1>'); 
    } 
    else if (hrs >= 12 && hrs <= 17)
    {
        document.write('<h1> Hello , <br> Good Afternoon! </h1> ');
    } 
    else 
    {
        document.write('<h1> Hello , <br> Good Evening! </h1>');
    }
    document.write('<br/>')

    
   