namespace TCPClientConnection
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
            this.colorDialog = new System.Windows.Forms.ColorDialog();
            this.bColor = new System.Windows.Forms.Button();
            this.bBgColor = new System.Windows.Forms.Button();
            this.colorDialog2 = new System.Windows.Forms.ColorDialog();
            this.wColor = new System.Windows.Forms.Button();
            this.colorDialog3 = new System.Windows.Forms.ColorDialog();
            this.colorDialog4 = new System.Windows.Forms.ColorDialog();
            this.buttonColor = new System.Windows.Forms.Button();
            this.gbSettings = new System.Windows.Forms.GroupBox();
            this.Font = new System.Windows.Forms.Button();
            this.fontDialog = new System.Windows.Forms.FontDialog();
            ((System.ComponentModel.ISupportInitialize)(this.nUDPort)).BeginInit();
            this.gbSettings.SuspendLayout();
            this.SuspendLayout();
            // 
            // Connect
            // 
            this.Connect.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.Connect.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Connect.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Connect.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.Connect.Location = new System.Drawing.Point(92, 370);
            this.Connect.Name = "Connect";
            this.Connect.Size = new System.Drawing.Size(73, 23);
            this.Connect.TabIndex = 0;
            this.Connect.Text = "Connect";
            this.Connect.UseVisualStyleBackColor = false;
            this.Connect.Click += new System.EventHandler(this.Connect_Click);
            // 
            // lbMessage
            // 
            this.lbMessage.BackColor = global::TCPClientConnection.Properties.Settings.Default.background;
            this.lbMessage.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbMessage.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbMessage.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.lbMessage.FormattingEnabled = true;
            this.lbMessage.Location = new System.Drawing.Point(12, 11);
            this.lbMessage.Name = "lbMessage";
            this.lbMessage.Size = new System.Drawing.Size(315, 43);
            this.lbMessage.TabIndex = 1;
            // 
            // nUDPort
            // 
            this.nUDPort.BackColor = global::TCPClientConnection.Properties.Settings.Default.background;
            this.nUDPort.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.nUDPort.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.nUDPort.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.nUDPort.Location = new System.Drawing.Point(207, 60);
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
            this.tbHostAddress.BackColor = global::TCPClientConnection.Properties.Settings.Default.background;
            this.tbHostAddress.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbHostAddress.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbHostAddress.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.tbHostAddress.Location = new System.Drawing.Point(60, 60);
            this.tbHostAddress.Name = "tbHostAddress";
            this.tbHostAddress.Size = new System.Drawing.Size(105, 20);
            this.tbHostAddress.TabIndex = 3;
            // 
            // Address
            // 
            this.Address.AutoSize = true;
            this.Address.Location = new System.Drawing.Point(9, 63);
            this.Address.Name = "Address";
            this.Address.Size = new System.Drawing.Size(45, 13);
            this.Address.TabIndex = 4;
            this.Address.Text = "Address";
            // 
            // Port
            // 
            this.Port.AutoSize = true;
            this.Port.Location = new System.Drawing.Point(175, 63);
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
            this.Close.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.Close.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Close.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Close.Enabled = false;
            this.Close.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.Close.Location = new System.Drawing.Point(171, 370);
            this.Close.Name = "Close";
            this.Close.Size = new System.Drawing.Size(75, 23);
            this.Close.TabIndex = 6;
            this.Close.Text = "Close";
            this.Close.UseVisualStyleBackColor = false;
            this.Close.Click += new System.EventHandler(this.Close_Click);
            // 
            // lbChat
            // 
            this.lbChat.BackColor = global::TCPClientConnection.Properties.Settings.Default.background;
            this.lbChat.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbChat.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbChat.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.lbChat.FormattingEnabled = true;
            this.lbChat.Location = new System.Drawing.Point(12, 87);
            this.lbChat.Name = "lbChat";
            this.lbChat.Size = new System.Drawing.Size(315, 251);
            this.lbChat.TabIndex = 7;
            // 
            // bSend
            // 
            this.bSend.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.bSend.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bSend.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bSend.Enabled = false;
            this.bSend.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.bSend.Location = new System.Drawing.Point(252, 344);
            this.bSend.Name = "bSend";
            this.bSend.Size = new System.Drawing.Size(75, 20);
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
            this.tMessage.BackColor = global::TCPClientConnection.Properties.Settings.Default.background;
            this.tMessage.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tMessage.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tMessage.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.tMessage.Location = new System.Drawing.Point(12, 344);
            this.tMessage.Name = "tMessage";
            this.tMessage.Size = new System.Drawing.Size(234, 20);
            this.tMessage.TabIndex = 9;
            // 
            // bColor
            // 
            this.bColor.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.bColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bColor.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.bColor.Location = new System.Drawing.Point(86, 19);
            this.bColor.Name = "bColor";
            this.bColor.Size = new System.Drawing.Size(73, 24);
            this.bColor.TabIndex = 10;
            this.bColor.Text = "Color";
            this.bColor.UseVisualStyleBackColor = false;
            this.bColor.Click += new System.EventHandler(this.bColor_Click);
            // 
            // bBgColor
            // 
            this.bBgColor.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.bBgColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bBgColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bBgColor.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.bBgColor.Location = new System.Drawing.Point(6, 19);
            this.bBgColor.Name = "bBgColor";
            this.bBgColor.Size = new System.Drawing.Size(74, 24);
            this.bBgColor.TabIndex = 11;
            this.bBgColor.Text = "textboxColor";
            this.bBgColor.UseVisualStyleBackColor = false;
            this.bBgColor.Click += new System.EventHandler(this.bBgColor_Click);
            // 
            // wColor
            // 
            this.wColor.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.wColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.wColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.wColor.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.wColor.Location = new System.Drawing.Point(6, 52);
            this.wColor.Name = "wColor";
            this.wColor.Size = new System.Drawing.Size(74, 23);
            this.wColor.TabIndex = 12;
            this.wColor.Text = "formBgColor";
            this.wColor.UseVisualStyleBackColor = false;
            this.wColor.Click += new System.EventHandler(this.wColor_Click);
            // 
            // buttonColor
            // 
            this.buttonColor.BackColor = global::TCPClientConnection.Properties.Settings.Default.buttons;
            this.buttonColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::TCPClientConnection.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.buttonColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.buttonColor.ForeColor = global::TCPClientConnection.Properties.Settings.Default.text;
            this.buttonColor.Location = new System.Drawing.Point(87, 52);
            this.buttonColor.Name = "buttonColor";
            this.buttonColor.Size = new System.Drawing.Size(72, 23);
            this.buttonColor.TabIndex = 13;
            this.buttonColor.Text = "buttonColor";
            this.buttonColor.UseVisualStyleBackColor = false;
            this.buttonColor.Click += new System.EventHandler(this.buttonColor_Click);
            // 
            // gbSettings
            // 
            this.gbSettings.Controls.Add(this.Font);
            this.gbSettings.Controls.Add(this.bBgColor);
            this.gbSettings.Controls.Add(this.buttonColor);
            this.gbSettings.Controls.Add(this.bColor);
            this.gbSettings.Controls.Add(this.wColor);
            this.gbSettings.Location = new System.Drawing.Point(333, 11);
            this.gbSettings.Name = "gbSettings";
            this.gbSettings.Size = new System.Drawing.Size(251, 382);
            this.gbSettings.TabIndex = 14;
            this.gbSettings.TabStop = false;
            this.gbSettings.Text = "Settings";
            // 
            // Font
            // 
            this.Font.Location = new System.Drawing.Point(165, 19);
            this.Font.Name = "Font";
            this.Font.Size = new System.Drawing.Size(75, 56);
            this.Font.TabIndex = 14;
            this.Font.Text = "Font";
            this.Font.UseVisualStyleBackColor = true;
            this.Font.Click += new System.EventHandler(this.Font_Click);
            // 
            // fontDialog
            // 
            this.fontDialog.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F);
            this.fontDialog.MaxSize = 8;
            this.fontDialog.MinSize = 8;
            this.fontDialog.ShowHelp = true;
            // 
            // fWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = global::TCPClientConnection.Properties.Settings.Default.window;
            this.ClientSize = new System.Drawing.Size(593, 403);
            this.Controls.Add(this.gbSettings);
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
            this.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::TCPClientConnection.Properties.Settings.Default, "window", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Name = "fWindow";
            this.Text = "TCP Client";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.fWindow_close);
            this.Load += new System.EventHandler(this.fWindow_Load);
            ((System.ComponentModel.ISupportInitialize)(this.nUDPort)).EndInit();
            this.gbSettings.ResumeLayout(false);
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
        private System.Windows.Forms.ColorDialog colorDialog;
        private System.Windows.Forms.Button bColor;
        private System.Windows.Forms.Button bBgColor;
        private System.Windows.Forms.ColorDialog colorDialog2;
        private System.Windows.Forms.Button wColor;
        private System.Windows.Forms.ColorDialog colorDialog3;
        private System.Windows.Forms.ColorDialog colorDialog4;
        private System.Windows.Forms.Button buttonColor;
        private System.Windows.Forms.GroupBox gbSettings;
        private System.Windows.Forms.Button Font;
        private System.Windows.Forms.FontDialog fontDialog;
    }
}

