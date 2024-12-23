<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainForm.aspx.cs" Inherits="family_email.MainForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 640px;
        }
        .middle-row {
            text-align: center;
        }
        .auto-style2 {
            height: 23px;
        }
        .tb {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body style="height: 371px">
    <form id="form1" runat="server" style="display: flex; justify-content: center; align-items: center;">
        <table class="auto-style1">
            <tr>
                <td>&nbsp;</td>
                <td class="middle-row">
                    <asp:Button ID="bClear" runat="server" Text="Clear" OnClick="bClear_Click" />
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>From</td>
                <td>
                    <asp:TextBox ID="tbFrom" runat="server" class="tb"></asp:TextBox>
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style2">To</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbTo" runat="server" class="tb"></asp:TextBox>
                </td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td>Subject</td>
                <td>
                    <asp:TextBox ID="tbSubject" runat="server" class="tb"></asp:TextBox>
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Text</td>
                <td>
                    <asp:TextBox ID="tbText" runat="server" class="tb" Rows="16" TextMode="MultiLine"></asp:TextBox>
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style2">Server SMTP</td>
                <td class="auto-style2">
                    <asp:TextBox ID="tbSMTP" runat="server" class="tb"></asp:TextBox>
                </td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td class="auto-style2"></td>
                <td class="auto-style2 middle-row" style="height: 69px;">
                    <asp:Button ID="bSend" runat="server" Text="Send" OnClick="bSend_Click" />
                    <br />
                    <asp:Label ID="lInfo1" runat="server"></asp:Label>
                </td>
                <td class="auto-style2"></td>
            </tr>
            <tr>
                <td>Attachments</td>
                <td>
                    <div class="tb">
                        <asp:FileUpload ID="fuAttachments" runat="server"/>
                    </div>
                </td>
                <td>
                    <asp:Button ID="bSave" runat="server" Text="Save" OnClick="bSave_Click" />
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="middle-row">
                    <asp:ListBox ID="lbAttachments" runat="server" class="tb"></asp:ListBox>
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td class="middle-row">
                    <asp:Label ID="lInfo2" runat="server"></asp:Label>
                </td>
                <td>&nbsp;</td>
            </tr>
        </table>
    </form>
</body>
</html>
