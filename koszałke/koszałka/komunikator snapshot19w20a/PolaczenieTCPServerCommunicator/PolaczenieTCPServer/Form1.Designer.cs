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
            this.colorDialog = new System.Windows.Forms.ColorDialog();
            this.btColor = new System.Windows.Forms.Button();
            this.colorDialog2 = new System.Windows.Forms.ColorDialog();
            this.btBgColor = new System.Windows.Forms.Button();
            this.colorDialog3 = new System.Windows.Forms.ColorDialog();
            this.gbSettings = new System.Windows.Forms.GroupBox();
            this.Font = new System.Windows.Forms.Button();
            this.btBtColor = new System.Windows.Forms.Button();
            this.btFormBackground = new System.Windows.Forms.Button();
            this.fontDialog = new System.Windows.Forms.FontDialog();
            ((System.ComponentModel.ISupportInitialize)(this.nudPort)).BeginInit();
            this.gbSettings.SuspendLayout();
            this.SuspendLayout();
            // 
            // tbAddress
            // 
            this.tbAddress.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.background;
            this.tbAddress.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbAddress.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbAddress.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.tbAddress.Location = new System.Drawing.Point(63, 61);
            this.tbAddress.Name = "tbAddress";
            this.tbAddress.Size = new System.Drawing.Size(100, 20);
            this.tbAddress.TabIndex = 0;
            // 
            // lAddress
            // 
            this.lAddress.AutoSize = true;
            this.lAddress.Location = new System.Drawing.Point(12, 64);
            this.lAddress.Name = "lAddress";
            this.lAddress.Size = new System.Drawing.Size(45, 13);
            this.lAddress.TabIndex = 1;
            this.lAddress.Text = "Address";
            // 
            // nudPort
            // 
            this.nudPort.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.background;
            this.nudPort.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.nudPort.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.nudPort.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.nudPort.Location = new System.Drawing.Point(201, 61);
            this.nudPort.Name = "nudPort";
            this.nudPort.Size = new System.Drawing.Size(120, 20);
            this.nudPort.TabIndex = 2;
            // 
            // lbLog
            // 
            this.lbLog.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.background;
            this.lbLog.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbLog.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbLog.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.lbLog.FormattingEnabled = true;
            this.lbLog.Location = new System.Drawing.Point(12, 12);
            this.lbLog.Name = "lbLog";
            this.lbLog.Size = new System.Drawing.Size(309, 43);
            this.lbLog.TabIndex = 3;
            // 
            // bStart
            // 
            this.bStart.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.bStart.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bStart.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bStart.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.bStart.Location = new System.Drawing.Point(88, 370);
            this.bStart.Name = "bStart";
            this.bStart.Size = new System.Drawing.Size(75, 23);
            this.bStart.TabIndex = 4;
            this.bStart.Text = "Start";
            this.bStart.UseVisualStyleBackColor = true;
            this.bStart.Click += new System.EventHandler(this.bStart_Click);
            // 
            // bStop
            // 
            this.bStop.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.bStop.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bStop.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bStop.Enabled = false;
            this.bStop.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.bStop.Location = new System.Drawing.Point(172, 370);
            this.bStop.Name = "bStop";
            this.bStop.Size = new System.Drawing.Size(75, 23);
            this.bStop.TabIndex = 5;
            this.bStop.Text = "Stop";
            this.bStop.UseVisualStyleBackColor = false;
            this.bStop.Click += new System.EventHandler(this.bStop_Click);
            // 
            // lPort
            // 
            this.lPort.AutoSize = true;
            this.lPort.Location = new System.Drawing.Point(169, 64);
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
            this.bwMessage.DoWork += new System.ComponentModel.DoWorkEventHandler(this.bwMessage_DoWork);
            // 
            // lbMessage
            // 
            this.lbMessage.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.background;
            this.lbMessage.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbMessage.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.lbMessage.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.lbMessage.FormattingEnabled = true;
            this.lbMessage.Location = new System.Drawing.Point(15, 87);
            this.lbMessage.Name = "lbMessage";
            this.lbMessage.Size = new System.Drawing.Size(309, 251);
            this.lbMessage.TabIndex = 7;
            // 
            // tbMessage
            // 
            this.tbMessage.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.background;
            this.tbMessage.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbMessage.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "background", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.tbMessage.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.tbMessage.Location = new System.Drawing.Point(15, 344);
            this.tbMessage.Name = "tbMessage";
            this.tbMessage.Size = new System.Drawing.Size(229, 20);
            this.tbMessage.TabIndex = 8;
            // 
            // bSend
            // 
            this.bSend.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.bSend.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bSend.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.bSend.Enabled = false;
            this.bSend.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.bSend.Location = new System.Drawing.Point(250, 344);
            this.bSend.Name = "bSend";
            this.bSend.Size = new System.Drawing.Size(71, 20);
            this.bSend.TabIndex = 9;
            this.bSend.Text = "Send";
            this.bSend.UseVisualStyleBackColor = false;
            this.bSend.Click += new System.EventHandler(this.bSend_Click);
            // 
            // colorDialog
            // 
            this.colorDialog.AnyColor = true;
            // 
            // btColor
            // 
            this.btColor.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.btColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btColor.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.btColor.Location = new System.Drawing.Point(87, 20);
            this.btColor.Name = "btColor";
            this.btColor.Size = new System.Drawing.Size(75, 23);
            this.btColor.TabIndex = 10;
            this.btColor.Text = "Color";
            this.btColor.UseVisualStyleBackColor = false;
            this.btColor.Click += new System.EventHandler(this.bColor_Click);
            // 
            // btBgColor
            // 
            this.btBgColor.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.btBgColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btBgColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btBgColor.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.btBgColor.Location = new System.Drawing.Point(6, 20);
            this.btBgColor.Name = "btBgColor";
            this.btBgColor.Size = new System.Drawing.Size(75, 23);
            this.btBgColor.TabIndex = 11;
            this.btBgColor.Text = "textboxColor";
            this.btBgColor.UseVisualStyleBackColor = false;
            this.btBgColor.Click += new System.EventHandler(this.bBgColor_Click);
            // 
            // gbSettings
            // 
            this.gbSettings.Controls.Add(this.Font);
            this.gbSettings.Controls.Add(this.btBtColor);
            this.gbSettings.Controls.Add(this.btFormBackground);
            this.gbSettings.Controls.Add(this.btBgColor);
            this.gbSettings.Controls.Add(this.btColor);
            this.gbSettings.Location = new System.Drawing.Point(327, 12);
            this.gbSettings.Name = "gbSettings";
            this.gbSettings.Size = new System.Drawing.Size(254, 381);
            this.gbSettings.TabIndex = 12;
            this.gbSettings.TabStop = false;
            this.gbSettings.Text = "Settings";
            // 
            // Font
            // 
            this.Font.Location = new System.Drawing.Point(168, 20);
            this.Font.Name = "Font";
            this.Font.Size = new System.Drawing.Size(75, 58);
            this.Font.TabIndex = 14;
            this.Font.Text = "Font";
            this.Font.UseVisualStyleBackColor = true;
            this.Font.Click += new System.EventHandler(this.Font_Click);
            // 
            // btBtColor
            // 
            this.btBtColor.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.btBtColor.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btBtColor.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btBtColor.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.btBtColor.Location = new System.Drawing.Point(87, 55);
            this.btBtColor.Name = "btBtColor";
            this.btBtColor.Size = new System.Drawing.Size(75, 23);
            this.btBtColor.TabIndex = 13;
            this.btBtColor.Text = "btBtColor";
            this.btBtColor.UseVisualStyleBackColor = false;
            this.btBtColor.Click += new System.EventHandler(this.btBtColor_Click);
            // 
            // btFormBackground
            // 
            this.btFormBackground.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.buttons;
            this.btFormBackground.DataBindings.Add(new System.Windows.Forms.Binding("ForeColor", global::PolaczenieTCPServer.Properties.Settings.Default, "text", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btFormBackground.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "buttons", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.btFormBackground.ForeColor = global::PolaczenieTCPServer.Properties.Settings.Default.text;
            this.btFormBackground.Location = new System.Drawing.Point(6, 55);
            this.btFormBackground.Name = "btFormBackground";
            this.btFormBackground.Size = new System.Drawing.Size(75, 23);
            this.btFormBackground.TabIndex = 12;
            this.btFormBackground.Text = "formBgColor";
            this.btFormBackground.UseVisualStyleBackColor = false;
            this.btFormBackground.Click += new System.EventHandler(this.btFormBackground_Click);
            // 
            // fontDialog
            // 
            this.fontDialog.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F);
            this.fontDialog.MaxSize = 8;
            this.fontDialog.MinSize = 8;
            // 
            // fWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = global::PolaczenieTCPServer.Properties.Settings.Default.window;
            this.ClientSize = new System.Drawing.Size(591, 401);
            this.Controls.Add(this.gbSettings);
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
            this.DataBindings.Add(new System.Windows.Forms.Binding("BackColor", global::PolaczenieTCPServer.Properties.Settings.Default, "window", true, System.Windows.Forms.DataSourceUpdateMode.OnPropertyChanged));
            this.Name = "fWindow";
            this.Text = "TCP Server";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.fWindow_close);
            this.Load += new System.EventHandler(this.fWindow_Load);
            ((System.ComponentModel.ISupportInitialize)(this.nudPort)).EndInit();
            this.gbSettings.ResumeLayout(false);
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
        private System.Windows.Forms.ColorDialog colorDialog;
        private System.Windows.Forms.Button btColor;
        private System.Windows.Forms.ColorDialog colorDialog2;
        private System.Windows.Forms.Button btBgColor;
        private System.Windows.Forms.ColorDialog colorDialog3;
        private System.Windows.Forms.GroupBox gbSettings;
        private System.Windows.Forms.Button btFormBackground;
        private System.Windows.Forms.Button btBtColor;
        private System.Windows.Forms.Button Font;
        private System.Windows.Forms.FontDialog fontDialog;
    }
}

