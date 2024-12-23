<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainForm.aspx.cs" Inherits="Email.MainForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style>
        td{
            text-align:center
        }
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            width: 518px;
        }
        .auto-style3 {
            width: 13px;
        }
        .auto-style4 {
            width: 190px;
        }
        .auto-style5 {
            width: 190px;
            height: 108px;
        }
        .auto-style6 {
            width: 518px;
            height: 108px;
        }
        .auto-style7 {
            width: 13px;
            height: 108px;
        }
        .auto-style8 {
            margin-left: 0px;
        }
        </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        
        
        </div>
        
        <br />
        <br />
    <table class="auto-style1">
        
    </table>
        
    <table class="auto-style1">
        
    </table>
        <table class="auto-style1">
            <tr>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style2">
                    <asp:Button ID="bClear" runat="server" Text="Clear" />
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">from</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbFrom" runat="server" Width="300px"></asp:TextBox>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">to</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbTo" runat="server" Width="300px"></asp:TextBox>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">subject</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbSubject" runat="server" Width="300px"></asp:TextBox>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style5">text</td>
                <td class="auto-style6">
                    <asp:TextBox ID="tbText" runat="server" Height="98px" TextMode="MultiLine" Width="300px"></asp:TextBox>
                </td>
                <td class="auto-style7"></td>
            </tr>
            <tr>
                <td class="auto-style4">server smtp</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbServer" runat="server" Width="300px"></asp:TextBox>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style2">
                    <asp:Button ID="bSend" runat="server" Text="Send" />
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style2">
                    <asp:Label ID="lInfo1" runat="server"></asp:Label>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">attachment</td>
                <td class="auto-style2">
                    <asp:FileUpload ID="fuAttachment" runat="server" CssClass="auto-style8" Width="300px" />
                </td>
                <td class="auto-style3">
                    <asp:Button ID="bSave" runat="server" Text="Save" />
                </td>
            </tr>
            <tr>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style2">
                    <asp:ListBox ID="lb" runat="server" Height="100px" Width="300px"></asp:ListBox>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style2">
                    <asp:Label ID="lInfo2" runat="server"></asp:Label>
                </td>
                <td class="auto-style3">&nbsp;</td>
            </tr>
        </table>
        
    </form>
    </body>
</html>
