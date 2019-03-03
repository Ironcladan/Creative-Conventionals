<?php
			$name=$_POST['name'];
			$con = mysqli_connect("localhost", "root", "", "hospitals");
		
									$sql= "SELECT * FROM  `register` WHERE  `name` LIKE  '".$name."' LIMIT 0 , 30";
									$result = mysqli_query($con, $sql);
									print "<table>";
									$set = 0; 
									while($row = mysqli_fetch_row($result))
									{
									$set = 1;
									print "<tr><td>AADHAR ID</td><td>" .$row[0] . "</td></tr>"; 
									print "<tr><td>NAME</td><td>" .$row[1] . "</td></tr>"; 
									print "<tr><td>ADDRESS</td><td>" .$row[2] . "</td></tr>"; 
									print "<tr><td>CITY</td><td>" .$row[3] . "</td></tr>"; 
									print "<tr><td>GENDER</td><td>" .$row[4] . "</td></tr>"; 
									print "<tr><td>PHONE</td><td>" .$row[5] . "</td></tr>"; 
									print "<tr><td>EMAIL</td><td>" .$row[6] . "</td></tr>"; 
									print "<tr><td>PASSWORD</td><td>" .$row[7] . "</td></tr>"; 					
									} 
									print "</table>"; 
			?>