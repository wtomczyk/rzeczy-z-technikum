using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void bEnter_Click(object sender, EventArgs e)
        {
            lWelcome.Text = string.Format(GetLocalResourceObject("Welcome").ToString(), tbName.Text);
        }

        protected void ddlLanguage_SelectedIndexChanged(object sender, EventArgs e)
        {
            string option = ddlLanguage.SelectedValue;
            Thread.CurrentThread.CurrentUICulture = new CultureInfo(option);
            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(option);
            Session["culture"] = option;
            Response.Redirect(Request.Url.LocalPath);
           
        }

        protected override void InitializeCulture()
        {
            if (Session["culture"] != null)
            {
                UICulture = Session["culture"].ToString();
                Culture = Session["culture"].ToString();
                Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(Session["culture"].ToString());
                Thread.CurrentThread.CurrentUICulture = new CultureInfo(Session["culture"].ToString());
            }
            base.InitializeCulture();
        }
    }
}