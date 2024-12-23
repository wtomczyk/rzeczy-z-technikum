namespace HostPotScanner
{
    partial class MainWindow
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
            this.bStart = new System.Windows.Forms.Button();
            this.lHost = new System.Windows.Forms.Label();
            this.lbHosts = new System.Windows.Forms.ListBox();
            this.nudFrom = new System.Windows.Forms.NumericUpDown();
            this.nudTo = new System.Windows.Forms.NumericUpDown();
            ((System.ComponentModel.ISupportInitialize)(this.nudFrom)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.nudTo)).BeginInit();
            this.SuspendLayout();
            // 
            // bStart
            // 
            this.bStart.Location = new System.Drawing.Point(79, 133);
            this.bStart.Name = "bStart";
            this.bStart.Size = new System.Drawing.Size(75, 23);
            this.bStart.TabIndex = 0;
            this.bStart.Text = "Start";
            this.bStart.UseVisualStyleBackColor = true;
            this.bStart.Click += new System.EventHandler(this.bStart_Click);
            // 
            // lHost
            // 
            this.lHost.AutoSize = true;
            this.lHost.Location = new System.Drawing.Point(290, 138);
            this.lHost.Name = "lHost";
            this.lHost.Size = new System.Drawing.Size(113, 13);
            this.lHost.TabIndex = 2;
            this.lHost.Text = "Currently the port scan";
            // 
            // lbHosts
            // 
            this.lbHosts.FormattingEnabled = true;
            this.lbHosts.Location = new System.Drawing.Point(103, 219);
            this.lbHosts.Name = "lbHosts";
            this.lbHosts.Size = new System.Drawing.Size(300, 173);
            this.lbHosts.TabIndex = 3;
            // 
            // nudFrom
            // 
            this.nudFrom.Location = new System.Drawing.Point(46, 48);
            this.nudFrom.Name = "nudFrom";
            this.nudFrom.Size = new System.Drawing.Size(120, 20);
            this.nudFrom.TabIndex = 4;
            // 
            // nudTo
            // 
            this.nudTo.Location = new System.Drawing.Point(308, 48);
            this.nudTo.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.nudTo.Name = "nudTo";
            this.nudTo.Size = new System.Drawing.Size(120, 20);
            this.nudTo.TabIndex = 5;
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(496, 450);
            this.Controls.Add(this.nudTo);
            this.Controls.Add(this.nudFrom);
            this.Controls.Add(this.lbHosts);
            this.Controls.Add(this.lHost);
            this.Controls.Add(this.bStart);
            this.Name = "MainWindow";
            this.Text = "LocalHostPortScanner";
            ((System.ComponentModel.ISupportInitialize)(this.nudFrom)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.nudTo)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button bStart;
        private System.Windows.Forms.Label lHost;
        private System.Windows.Forms.ListBox lbHosts;
        private System.Windows.Forms.NumericUpDown nudFrom;
        private System.Windows.Forms.NumericUpDown nudTo;
    }
}

