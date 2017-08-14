<form action="download.php"method="post">
<input type="submit" name="file" value="../uploads/my task.docx">
</form>
<a href="/lastchance/uploads/courses.rtf">download </a>
<?php
if($_POST['file'])
{
    
    header("Location:../uploads/my task.docx");
}
?>
 