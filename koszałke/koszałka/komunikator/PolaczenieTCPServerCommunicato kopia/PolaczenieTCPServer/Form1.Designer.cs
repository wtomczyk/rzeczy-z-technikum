namespace PolaczenieTCPServer
{
    partial class fWindow
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
            this.tbAddress = new System.Windows.Forms.TextBox();
            this.lAddress = new System.Windows.Forms.Label();
            this.nudPort = new System.Windows.Forms.NumericUpDown();
            this.lbLog = new System.Windows.Forms.ListBox();
            this.bStart = new System.Windows.Forms.Button();
            this.bStop = new System.Windows.Forms.Button();
            this.lPort = new System.Windows.Forms.Label();
            this.bwConnection = new System.ComponentModel.BackgroundWorker();
            this.bwMessage = new System.ComponentModel.BackgroundWorker();
            this.lbMessage = new System.Windows.Forms.ListBox();
            this.tbMessage = new System.Windows.Forms.TextBox();
            this.bSend = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.nudPort)).BeginInit();
            this.SuspendLayout();
            // 
            // tbAddress
            // 
            this.tbAddress.Location = new System.Drawing.Point(84, 12);
            this.tbAddress.Name = "tbAddress";
            this.tbAddress.Size = new System.Drawing.Size(100, 20);
            this.tbAddress.TabIndex = 0;
            // 
            // lAddress
            // 
            this.lAddress.AutoSize = true;
            this.lAddress.Location = new System.Drawing.Point(22, 15);
            this.lAddress.Name = "lAddress";
            this.lAddress.Size = new System.Drawing.Size(45, 13);
            this.lAddress.TabIndex = 1;
            this.lAddress.Text = "Address";
            // 
            // nudPort
            // 
            this.nudPort.Location = new System.Drawing.Point(262, 12);
            this.nudPort.Name = "nudPort";
            this.nudPort.Size = new System.Drawing.Size(120, 20);
            this.nudPort.TabIndex = 2;
            // 
            // lbLog
            // 
            this.lbLog.FormattingEnabled = true;
            this.lbLog.Location = new System.Drawing.Point(25, 61);
            this.lbLog.Name = "lbLog";
            this.lbLog.Size = new System.Drawing.Size(166, 134);
            this.lbLog.TabIndex = 3;
            // 
            // bStart
            // 
            this.bStart.Location = new System.Drawing.Point(25, 217);
            this.bStart.Name = "bStart";
            this.bStart.Size = new System.Drawing.Size(75, 23);
            this.bStart.TabIndex = 4;
            this.bStart.Text = "Start";
            this.bStart.UseVisualStyleBackColor = true;
            this.bStart.Click += new System.EventHandler(this.bStart_Click);
            // 
            // bStop
            // 
            this.bStop.Enabled = false;
            this.bStop.Location = new System.Drawing.Point(116, 217);
            this.bStop.Name = "bStop";
            this.bStop.Size = new System.Drawing.Size(75, 23);
            this.bStop.TabIndex = 5;
            this.bStop.Text = "Stop";
            this.bStop.UseVisualStyleBackColor = true;
            this.bStop.Click += new System.EventHandler(this.bStop_Click);
            // 
            // lPort
            // 
            this.lPort.AutoSize = true;
            this.lPort.Location = new System.Drawing.Point(209, 15);
            this.lPort.Name = "lPort";
            this.lPort.Size = new System.Drawing.Size(26, 13);
            this.lPort.TabIndex = 6;
            this.lPort.Text = "Port";
            // 
            // bwConnection
            // 
            this.bwConnection.WorkerReportsProgress = true;
            this.bwConnection.WorkerSupportsCancellation = true;
            this.bwConnection.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwConnection_DoWork);
            // 
            // bwMessage
            // 
            this.bwMessage.WorkerReportsProgress = true;
            this.bwMessage.WorkerSupportsCancellation = true;
            // 
            // lbMessage
            // 
            this.lbMessage.FormattingEnabled = true;
            this.lbMessage.Location = new System.Drawing.Point(212, 61);
            this.lbMessage.Name = "lbMessage";
            this.lbMessage.Size = new System.Drawing.Size(170, 134);
            this.lbMessage.TabIndex = 7;
            // 
            // tbMessage
            // 
            this.tbMessage.Location = new System.Drawing.Point(212, 219);
            this.tbMessage.Name = "tbMessage";
            this.tbMessage.Size = new System.Drawing.Size(100, 20);
            this.tbMessage.TabIndex = 8;
            // 
            // bSend
            // 
            this.bSend.Enabled = false;
            this.bSend.Location = new System.Drawing.Point(316, 217);
            this.bSend.Name = "bSend";
            this.bSend.Size = new System.Drawing.Size(66, 23);
            this.bSend.TabIndex = 9;
            this.bSend.Text = "Send";
            this.bSend.UseVisualStyleBackColor = true;
            this.bSend.Click += new System.EventHandler(this.bSend_Click);
            // 
            // fWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(403, 252);
            this.Controls.Add(this.bSend);
            this.Controls.Add(this.tbMessage);
            this.Controls.Add(this.lbMessage);
            this.Controls.Add(this.lPort);
            this.Controls.Add(this.bStop);
            this.Controls.Add(this.bStart);
            this.Controls.Add(this.lbLog);
            this.Controls.Add(this.nudPort);
            this.Controls.Add(this.lAddress);
            this.Controls.Add(this.tbAddress);
            this.Name = "fWindow";
            this.Text = "TCP Server";
            ((System.ComponentModel.ISupportInitialize)(this.nudPort)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox tbAddress;
        private System.Windows.Forms.Label lAddress;
        private System.Windows.Forms.NumericUpDown nudPort;
        private System.Windows.Forms.ListBox lbLog;
        private System.Windows.Forms.Button bStart;
        private System.Windows.Forms.Button bStop;
        private System.Windows.Forms.Label lPort;
        private System.ComponentModel.BackgroundWorker bwConnection;
        private System.ComponentModel.BackgroundWorker bwMessage;
        private System.Windows.Forms.ListBox lbMessage;
        private System.Windows.Forms.TextBox tbMessage;
        private System.Windows.Forms.Button bSend;
    }
}

