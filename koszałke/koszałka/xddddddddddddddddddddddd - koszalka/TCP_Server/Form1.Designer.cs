namespace serverTcp
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
            this.labelIP = new System.Windows.Forms.Label();
            this.labelPort = new System.Windows.Forms.Label();
            this.lbServer = new System.Windows.Forms.ListBox();
            this.tbIP = new System.Windows.Forms.TextBox();
            this.numUDPort = new System.Windows.Forms.NumericUpDown();
            this.btStart = new System.Windows.Forms.Button();
            this.btStop = new System.Windows.Forms.Button();
            this.bwConnection = new System.ComponentModel.BackgroundWorker();
            this.chatBox = new System.Windows.Forms.ListBox();
            this.chatEnter = new System.Windows.Forms.Button();
            this.chatInput = new System.Windows.Forms.TextBox();
            this.chatConnection = new System.ComponentModel.BackgroundWorker();
            this.btCancelClient = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.numUDPort)).BeginInit();
            this.SuspendLayout();
            // 
            // labelIP
            // 
            this.labelIP.AutoSize = true;
            this.labelIP.Location = new System.Drawing.Point(16, 27);
            this.labelIP.Name = "labelIP";
            this.labelIP.Size = new System.Drawing.Size(20, 13);
            this.labelIP.TabIndex = 0;
            this.labelIP.Text = "IP:";
            // 
            // labelPort
            // 
            this.labelPort.AutoSize = true;
            this.labelPort.Location = new System.Drawing.Point(226, 27);
            this.labelPort.Name = "labelPort";
            this.labelPort.Size = new System.Drawing.Size(29, 13);
            this.labelPort.TabIndex = 1;
            this.labelPort.Text = "Port:";
            // 
            // lbServer
            // 
            this.lbServer.FormattingEnabled = true;
            this.lbServer.Location = new System.Drawing.Point(18, 87);
            this.lbServer.Name = "lbServer";
            this.lbServer.Size = new System.Drawing.Size(401, 134);
            this.lbServer.TabIndex = 2;
            // 
            // tbIP
            // 
            this.tbIP.Location = new System.Drawing.Point(42, 24);
            this.tbIP.Name = "tbIP";
            this.tbIP.Size = new System.Drawing.Size(163, 20);
            this.tbIP.TabIndex = 3;
            // 
            // numUDPort
            // 
            this.numUDPort.Location = new System.Drawing.Point(261, 24);
            this.numUDPort.Maximum = new decimal(new int[] {
            65565,
            0,
            0,
            0});
            this.numUDPort.Name = "numUDPort";
            this.numUDPort.Size = new System.Drawing.Size(120, 20);
            this.numUDPort.TabIndex = 4;
            this.numUDPort.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            // 
            // btStart
            // 
            this.btStart.Location = new System.Drawing.Point(92, 245);
            this.btStart.Name = "btStart";
            this.btStart.Size = new System.Drawing.Size(75, 23);
            this.btStart.TabIndex = 5;
            this.btStart.Text = "Start";
            this.btStart.UseVisualStyleBackColor = true;
            this.btStart.Click += new System.EventHandler(this.btStart_Click);
            // 
            // btStop
            // 
            this.btStop.Enabled = false;
            this.btStop.Location = new System.Drawing.Point(254, 246);
            this.btStop.Name = "btStop";
            this.btStop.Size = new System.Drawing.Size(75, 23);
            this.btStop.TabIndex = 6;
            this.btStop.Text = "Stop";
            this.btStop.UseVisualStyleBackColor = true;
            this.btStop.Click += new System.EventHandler(this.btStop_Click);
            // 
            // bwConnection
            // 
            this.bwConnection.WorkerReportsProgress = true;
            this.bwConnection.WorkerSupportsCancellation = true;
            this.bwConnection.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwConnection_DoWork);
            // 
            // chatBox
            // 
            this.chatBox.FormattingEnabled = true;
            this.chatBox.Location = new System.Drawing.Point(463, 23);
            this.chatBox.Name = "chatBox";
            this.chatBox.Size = new System.Drawing.Size(287, 199);
            this.chatBox.TabIndex = 7;
            // 
            // chatEnter
            // 
            this.chatEnter.Enabled = false;
            this.chatEnter.Location = new System.Drawing.Point(691, 245);
            this.chatEnter.Name = "chatEnter";
            this.chatEnter.Size = new System.Drawing.Size(69, 23);
            this.chatEnter.TabIndex = 8;
            this.chatEnter.Text = "Wyślij";
            this.chatEnter.UseVisualStyleBackColor = true;
            this.chatEnter.Click += new System.EventHandler(this.chatEnter_Click);
            // 
            // chatInput
            // 
            this.chatInput.Enabled = false;
            this.chatInput.Location = new System.Drawing.Point(463, 248);
            this.chatInput.Name = "chatInput";
            this.chatInput.Size = new System.Drawing.Size(222, 20);
            this.chatInput.TabIndex = 9;
            // 
            // chatConnection
            // 
            this.chatConnection.WorkerReportsProgress = true;
            this.chatConnection.WorkerSupportsCancellation = true;
            this.chatConnection.DoWork += new System.ComponentModel.DoWorkEventHandler(this.chatConnection_DoWork);
            // 
            // btCancelClient
            // 
            this.btCancelClient.Enabled = false;
            this.btCancelClient.Location = new System.Drawing.Point(173, 245);
            this.btCancelClient.Name = "btCancelClient";
            this.btCancelClient.Size = new System.Drawing.Size(75, 23);
            this.btCancelClient.TabIndex = 10;
            this.btCancelClient.Text = "Cancel";
            this.btCancelClient.UseVisualStyleBackColor = true;
            this.btCancelClient.Click += new System.EventHandler(this.btCancelClient_Click);
            // 
            // fWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(784, 280);
            this.Controls.Add(this.btCancelClient);
            this.Controls.Add(this.chatInput);
            this.Controls.Add(this.chatEnter);
            this.Controls.Add(this.chatBox);
            this.Controls.Add(this.btStop);
            this.Controls.Add(this.btStart);
            this.Controls.Add(this.numUDPort);
            this.Controls.Add(this.tbIP);
            this.Controls.Add(this.lbServer);
            this.Controls.Add(this.labelPort);
            this.Controls.Add(this.labelIP);
            this.Name = "fWindow";
            this.Text = "TCP Server";
            ((System.ComponentModel.ISupportInitialize)(this.numUDPort)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label labelIP;
        private System.Windows.Forms.Label labelPort;
        private System.Windows.Forms.ListBox lbServer;
        private System.Windows.Forms.TextBox tbIP;
        private System.Windows.Forms.NumericUpDown numUDPort;
        private System.Windows.Forms.Button btStart;
        private System.Windows.Forms.Button btStop;
        private System.ComponentModel.BackgroundWorker bwConnection;
        private System.Windows.Forms.ListBox chatBox;
        private System.Windows.Forms.Button chatEnter;
        private System.Windows.Forms.TextBox chatInput;
        private System.ComponentModel.BackgroundWorker chatConnection;
        private System.Windows.Forms.Button btCancelClient;
    }
}

