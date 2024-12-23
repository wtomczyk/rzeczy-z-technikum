namespace TCPClientConnection
{
    partial class Form1
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
            this.Connect = new System.Windows.Forms.Button();
            this.lbMessage = new System.Windows.Forms.ListBox();
            this.nUDPort = new System.Windows.Forms.NumericUpDown();
            this.tbHostAddress = new System.Windows.Forms.TextBox();
            this.Address = new System.Windows.Forms.Label();
            this.Port = new System.Windows.Forms.Label();
            this.bwConnection = new System.ComponentModel.BackgroundWorker();
            this.Close = new System.Windows.Forms.Button();
            this.lbChat = new System.Windows.Forms.ListBox();
            this.bSend = new System.Windows.Forms.Button();
            this.BackgroundWorker2 = new System.ComponentModel.BackgroundWorker();
            this.tMessage = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.nUDPort)).BeginInit();
            this.SuspendLayout();
            // 
            // Connect
            // 
            this.Connect.Location = new System.Drawing.Point(259, 349);
            this.Connect.Name = "Connect";
            this.Connect.Size = new System.Drawing.Size(75, 23);
            this.Connect.TabIndex = 0;
            this.Connect.Text = "Connect";
            this.Connect.UseVisualStyleBackColor = true;
            this.Connect.Click += new System.EventHandler(this.Connect_Click);
            // 
            // lbMessage
            // 
            this.lbMessage.FormattingEnabled = true;
            this.lbMessage.Location = new System.Drawing.Point(84, 128);
            this.lbMessage.Name = "lbMessage";
            this.lbMessage.Size = new System.Drawing.Size(264, 147);
            this.lbMessage.TabIndex = 1;
            // 
            // nUDPort
            // 
            this.nUDPort.Location = new System.Drawing.Point(349, 36);
            this.nUDPort.Maximum = new decimal(new int[] {
            10000000,
            0,
            0,
            0});
            this.nUDPort.Name = "nUDPort";
            this.nUDPort.Size = new System.Drawing.Size(120, 20);
            this.nUDPort.TabIndex = 2;
            // 
            // tbHostAddress
            // 
            this.tbHostAddress.Location = new System.Drawing.Point(84, 36);
            this.tbHostAddress.Name = "tbHostAddress";
            this.tbHostAddress.Size = new System.Drawing.Size(100, 20);
            this.tbHostAddress.TabIndex = 3;
            // 
            // Address
            // 
            this.Address.AutoSize = true;
            this.Address.Location = new System.Drawing.Point(25, 36);
            this.Address.Name = "Address";
            this.Address.Size = new System.Drawing.Size(45, 13);
            this.Address.TabIndex = 4;
            this.Address.Text = "Address";
            // 
            // Port
            // 
            this.Port.AutoSize = true;
            this.Port.Location = new System.Drawing.Point(256, 36);
            this.Port.Name = "Port";
            this.Port.Size = new System.Drawing.Size(26, 13);
            this.Port.TabIndex = 5;
            this.Port.Text = "Port";
            // 
            // bwConnection
            // 
            this.bwConnection.WorkerSupportsCancellation = true;
            this.bwConnection.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwConnection_DoWork);
            // 
            // Close
            // 
            this.Close.Location = new System.Drawing.Point(479, 339);
            this.Close.Name = "Close";
            this.Close.Size = new System.Drawing.Size(75, 23);
            this.Close.TabIndex = 6;
            this.Close.Text = "Close";
            this.Close.UseVisualStyleBackColor = true;
            this.Close.Click += new System.EventHandler(this.Close_Click);
            // 
            // lbChat
            // 
            this.lbChat.FormattingEnabled = true;
            this.lbChat.Location = new System.Drawing.Point(442, 91);
            this.lbChat.Name = "lbChat";
            this.lbChat.Size = new System.Drawing.Size(205, 95);
            this.lbChat.TabIndex = 7;
            // 
            // bSend
            // 
            this.bSend.Location = new System.Drawing.Point(556, 210);
            this.bSend.Name = "bSend";
            this.bSend.Size = new System.Drawing.Size(75, 23);
            this.bSend.TabIndex = 8;
            this.bSend.Text = "Send";
            this.bSend.UseVisualStyleBackColor = true;
            this.bSend.Click += new System.EventHandler(this.bSend_Click);
            // 
            // BackgroundWorker2
            // 
            this.BackgroundWorker2.WorkerReportsProgress = true;
            this.BackgroundWorker2.WorkerSupportsCancellation = true;
            this.BackgroundWorker2.DoWork += new System.ComponentModel.DoWorkEventHandler(this.BackgroundWorker2_DoWork);
            // 
            // tMessage
            // 
            this.tMessage.Location = new System.Drawing.Point(354, 210);
            this.tMessage.Name = "tMessage";
            this.tMessage.Size = new System.Drawing.Size(175, 20);
            this.tMessage.TabIndex = 9;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tMessage);
            this.Controls.Add(this.bSend);
            this.Controls.Add(this.lbChat);
            this.Controls.Add(this.Close);
            this.Controls.Add(this.Port);
            this.Controls.Add(this.Address);
            this.Controls.Add(this.tbHostAddress);
            this.Controls.Add(this.nUDPort);
            this.Controls.Add(this.lbMessage);
            this.Controls.Add(this.Connect);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.nUDPort)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button Connect;
        private System.Windows.Forms.ListBox lbMessage;
        private System.Windows.Forms.NumericUpDown nUDPort;
        private System.Windows.Forms.TextBox tbHostAddress;
        private System.Windows.Forms.Label Address;
        private System.Windows.Forms.Label Port;
        private System.ComponentModel.BackgroundWorker bwConnection;
        private System.Windows.Forms.Button Close;
        private System.Windows.Forms.ListBox lbChat;
        private System.Windows.Forms.Button bSend;
        private System.ComponentModel.BackgroundWorker BackgroundWorker2;
        private System.Windows.Forms.TextBox tMessage;
    }
}

