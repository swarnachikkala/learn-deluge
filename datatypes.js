/*
a = 10;
msg = "Square of " + a + " is " + power(a,2);
Info msg;
Info "Result: " + msg;
*/

/*
qty = 10;
price = 12.5;
msg = "Total Bill Amount for " + qty + "(items) of each " + price + " is " + qty * price;
Info msg;
*/

/*
newsletter_optin = true;
if (newsletter_optin)
{
	Info "Subscribed for Newsletters";
}
else
{	Info "Unsubscribed from Newletters";
}
*/

/*
qty = 13.5;
price = 12.5;
amount = qty * price;
Info amount;
Info ceil(amount);
Info floor(amount);
Info round(amount,0);
*/

student1 = "145";
student2 = "29";
firstname = "Swarna";
middlename = " ";
lastname = "Chikkala";
if( middlename.isEmpty())
{
fullname = firstname + " " + lastname;
}
else 
{
fullname = firstname + " " + middlename + " " + lastname;
}
addressline1 = "536 Catalina Grande Dr";
hex_number = "41";


Info fullname;
Info fullname.contains("war");
Info fullname.length();
Info firstname.concat(" ").concat(lastname);
Info fullname.startsWith("S");
Info fullname.endsWithIgnoreCase("A");
Info firstname.equalsIgnoreCase("swarna");
Info addressline1.getAlpha();
Info fullname.getOccurenceCount("a");
Info fullname.getPrefix("w");
Info fullname.getPrefix("Chikkala");

Info hex_number.hexToText();
Info fullname.indexOf("a")+1;
Info fullname.lastIndexOf("a")+1;
Info fullname.left(6);
Info fullname.right(9);
Info firstname.rightpad(10).concat(lastname);

Info student1.leftPad(5);
Info student2.leftpad(5);


