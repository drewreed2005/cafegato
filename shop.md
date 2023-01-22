<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h2 style="color:black">Custom Pin Priority</h2>
<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="email">Email</label></th>
        <th><label for="phone">Phone</label></th>
        <th><label for="custom">Custom Pin</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999"></td>
        <td><input type="custom" name="custom" id="custom" required></td>
        <td ><button onclick="create_User()">Submit</button></td>
    </tr>
</table>
