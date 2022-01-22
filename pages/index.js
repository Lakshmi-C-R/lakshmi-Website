<!DOCTYPE html>   
<html>   
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<title> Login Page </title>  
<style> 

Body {
  font-family: Calibri, Helvetica, sans-serif;
  background-color: rgba(204, 192, 255, 0.541);
} 
button {   
       background-color: rgb(62, 196, 62);   
       width: 50%;  
        color: rgb(255, 255, 255);   
        padding: 10px;   
        margin: 8px 0px;   
        border: none;   
        cursor: pointer;   
         }   

 input[type=text], input[type=password] {   
        width: 80%;   
        margin: 5px 0;  
        padding: 5px 10px;   
        display: inline-block;   
        border: 2px solid rgb(14, 95, 25);   
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }       
 .container {   
        
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 400px;
        padding: 25px;   
        border: 2px rgb(205, 159, 90);
        background-color: rgb(255, 255, 255);  
    }   
     
</style>   
</head>    
<body>    
    <center><h1> Blood Bank </h1></center>
    
    <form>  
    
        <div class="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required>  
            <br>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required>  
            <br>
            <input type="checkbox" checked="checked"> Remember me 
            
            <center><button type="submit">Login</button></center>   
            <center>Forgot <a href="#">  password? </a> </center>
      
            <p>New User ? <a href="#"> Create an Account</a></p>
        </div>   
    </form>     
</body>     
</html>  
