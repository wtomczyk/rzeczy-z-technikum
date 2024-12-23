namespace Remote_Host_Port_Scanner
{
    partial class Scanner
    {
        /// <summary>
        /// Wymagana zmienna projektanta.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Wyczyść wszystkie używane zasoby.
        /// </summary>
        /// <param name="disposing">prawda, jeżeli zarządzane zasoby powinny zostać zlikwidowane; Fałsz w przeciwnym wypadku.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Kod generowany przez Projektanta formularzy systemu Windows

        /// <summary>
        /// Metoda wymagana do obsługi projektanta — nie należy modyfikować
        /// jej zawartości w edytorze kodu.
        /// </summary>
        private void InitializeComponent()
        {
            this.bScan = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.lbMessage = new System.Windows.Forms.ListBox();
            this.tbHostAddress = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // bScan
            // 
            this.bScan.Location = new System.Drawing.Point(456, 117);
            this.bScan.Name = "bScan";
            this.bScan.Size = new System.Drawing.Size(75, 23);
            this.bScan.TabIndex = 0;
            this.bScan.Text = "przycisk";
            this.bScan.UseVisualStyleBackColor = true;
            this.bScan.Click += new System.EventHandler(this.bScan_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(144, 122);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "label1";
            // 
            // lbMessage
            // 
            this.lbMessage.FormattingEnabled = true;
            this.lbMessage.Location = new System.Drawing.Point(105, 185);
            this.lbMessage.Name = "lbMessage";
            this.lbMessage.Size = new System.Drawing.Size(310, 212);
            this.lbMessage.TabIndex = 2;
            // 
            // tbHostAddress
            // 
            this.tbHostAddress.Location = new System.Drawing.Point(242, 120);
            this.tbHostAddress.Name = "tbHostAddress";
            this.tbHostAddress.Size = new System.Drawing.Size(173, 20);
            this.tbHostAddress.TabIndex = 3;
            // 
            // Scanner
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tbHostAddress);
            this.Controls.Add(this.lbMessage);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.bScan);
            this.Name = "Scanner";
            this.Text = "RemoteHostPortScanner";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button bScan;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ListBox lbMessage;
        private System.Windows.Forms.TextBox tbHostAddress;
    }
}

