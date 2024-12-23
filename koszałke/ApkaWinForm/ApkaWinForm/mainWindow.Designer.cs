namespace ApkaWinForm
{
    partial class mainWindow
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
            this.btStart = new System.Windows.Forms.Button();
            this.numudPort2 = new System.Windows.Forms.NumericUpDown();
            this.numudPort1 = new System.Windows.Forms.NumericUpDown();
            this.lbStan = new System.Windows.Forms.Label();
            this.lbHosts = new System.Windows.Forms.ListBox();
            ((System.ComponentModel.ISupportInitialize)(this.numudPort2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numudPort1)).BeginInit();
            this.SuspendLayout();
            // 
            // btStart
            // 
            this.btStart.Location = new System.Drawing.Point(49, 168);
            this.btStart.Name = "btStart";
            this.btStart.Size = new System.Drawing.Size(75, 23);
            this.btStart.TabIndex = 0;
            this.btStart.Text = "Start";
            this.btStart.UseVisualStyleBackColor = true;
            this.btStart.Click += new System.EventHandler(this.btStart_Click);
            // 
            // numudPort2
            // 
            this.numudPort2.Location = new System.Drawing.Point(34, 129);
            this.numudPort2.Maximum = new decimal(new int[] {
            60000,
            0,
            0,
            0});
            this.numudPort2.Name = "numudPort2";
            this.numudPort2.Size = new System.Drawing.Size(120, 20);
            this.numudPort2.TabIndex = 1;
            // 
            // numudPort1
            // 
            this.numudPort1.Location = new System.Drawing.Point(34, 92);
            this.numudPort1.Name = "numudPort1";
            this.numudPort1.Size = new System.Drawing.Size(120, 20);
            this.numudPort1.TabIndex = 2;
            this.numudPort1.ValueChanged += new System.EventHandler(this.numudPort1_ValueChanged);
            // 
            // lbStan
            // 
            this.lbStan.AutoSize = true;
            this.lbStan.Location = new System.Drawing.Point(46, 208);
            this.lbStan.Name = "lbStan";
            this.lbStan.Size = new System.Drawing.Size(93, 13);
            this.lbStan.TabIndex = 3;
            this.lbStan.Text = "Skanowane porty:";
            // 
            // lbHosts
            // 
            this.lbHosts.FormattingEnabled = true;
            this.lbHosts.Location = new System.Drawing.Point(136, 376);
            this.lbHosts.Name = "lbHosts";
            this.lbHosts.Size = new System.Drawing.Size(408, 303);
            this.lbHosts.TabIndex = 4;
            // 
            // mainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.ClientSize = new System.Drawing.Size(666, 691);
            this.Controls.Add(this.lbHosts);
            this.Controls.Add(this.lbStan);
            this.Controls.Add(this.numudPort1);
            this.Controls.Add(this.numudPort2);
            this.Controls.Add(this.btStart);
            this.Name = "mainWindow";
            this.Text = "HostPortScanner";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.numudPort2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numudPort1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btStart;
        private System.Windows.Forms.NumericUpDown numudPort2;
        private System.Windows.Forms.NumericUpDown numudPort1;
        private System.Windows.Forms.Label lbStan;
        private System.Windows.Forms.ListBox lbHosts;
    }
}

