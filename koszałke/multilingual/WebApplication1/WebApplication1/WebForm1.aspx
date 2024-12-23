<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" Culture="auto:en-US" UICulture="auto"%>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            text-align: center;
            width: 300px;
            height: 55px;
        }
        .auto-style4 {
            width: 300px;
        }
        .auto-style5 {
            width: 464px;
            height: 55px;
        }
        .auto-style6 {
            height: 55px;
        }
        .auto-style7 {
            width: 464px;
            height: 206px;
            text-align: center;
        }
        .auto-style8 {
            width: 300px;
            height: 206px;
        }
        .auto-style9 {
            height: 206px;
        }
        .auto-style10 {
            width: 464px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <table class="auto-style1">
            <tr>
                <td class="auto-style5"></td>
                <td class="auto-style2">
                    <h1>
                        <asp:Label ID="lHeader" runat="server" Text="<%$ Resources:Resource, Header %>"></asp:Label>
                    </h1>
                </td>
                <td class="auto-style6"></td>
            </tr>
            <tr>
                <td class="auto-style10">
                    <asp:DropDownList ID="ddlLanguage" runat="server" Width="111px" AutoPostBack="True" OnSelectedIndexChanged="ddlLanguage_SelectedIndexChanged">
                        <asp:ListItem>Select language</asp:ListItem>
                        <asp:ListItem Value="pl-PL">Polski</asp:ListItem>
                        <asp:ListItem Value="en-US">English</asp:ListItem>
                        <asp:ListItem Value="ru-RU">русский</asp:ListItem>
                    </asp:DropDownList>
                    <asp:Label ID="lName" runat="server" Text="Imię" meta:resourceKey="lName"></asp:Label>
&nbsp;<asp:TextBox ID="tbName" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style4">&nbsp;</td>
                <td>
                    <asp:Button ID="bEnter" runat="server" Text="Wejdź" meta:resourceKey="bEnter" OnClick="bEnter_Click"/>
                </td>
            </tr>
            <tr>
                <td class="auto-style7">
                    <asp:Label ID="lWelcome" runat="server"></asp:Label>
                </td>
                <td class="auto-style8">
                    <asp:Calendar ID="Calendar1" runat="server"></asp:Calendar>
                </td>
                <td class="auto-style9"></td>
            </tr>
        </table>
    </form>
</body>
</html>
