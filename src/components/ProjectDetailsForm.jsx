import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function ProjectDetailsForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_contact: "",
    area_required_sft: "",
    project_timeline: "",
    term_lockin: "",
    activity_type: "",
    mpcb_category: "",
    power_kva: "",
    lighting_lux: "",
    floor_load: "",
    no_of_docks: "",
    process_water: "",
    utilities_area: "",
    crane_type: "",
    no_of_cranes: "",
    crane_transverse: "",
    crane_span: "",
    underhook_height: "",
    crane_capacity: "",
    sprinkler_type: "",
    manpower_details: "",
    etp_details: "",
    effluent_characteristics: "",
    raw_material: "",
    hazardous_material: "",
    msds_details: "",
    company_brief: ""
  });

  const [files, setFiles] = useState({
    mpcb_certificate: null,
    process_flow_file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.size > 10 * 1024 * 1024) {
      alert("File size should be less than 10MB");
      e.target.value = "";
      return;
    }
    
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    const validDocTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (name === 'mpcb_certificate' && !validImageTypes.includes(file.type)) {
      alert("MPCB Certificate must be PDF, JPG, JPEG, or PNG");
      e.target.value = "";
      return;
    }
    
    if (name === 'process_flow_file' && !validDocTypes.includes(file.type)) {
      alert("Process Flow file must be PDF, DOC, DOCX, JPG, JPEG, or PNG");
      e.target.value = "";
      return;
    }
    
    setFiles(prev => ({
      ...prev,
      [name]: file
    }));
  };

  const uploadToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "client_requirements"); 
      
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", 
        {
          method: "POST",
          body: formData,
        }
      );
      
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      
      const data = await response.json();
      return {
        url: data.secure_url,
        public_id: data.public_id,
        format: data.format
      };
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    let uploadResults = {
      mpcb_certificate: null,
      process_flow_file: null
    };

    try {
      if (files.mpcb_certificate) {
        const result = await uploadToCloudinary(files.mpcb_certificate);
        uploadResults.mpcb_certificate = result;
      }

      if (files.process_flow_file) {
        const result = await uploadToCloudinary(files.process_flow_file);
        uploadResults.process_flow_file = result;
      }

      const emailData = {
        ...formData,
        mpcb_certificate_url: uploadResults.mpcb_certificate?.url || "Not provided",
        mpcb_certificate_format: uploadResults.mpcb_certificate?.format || "",
        process_flow_url: uploadResults.process_flow_file?.url || "Not provided",
        process_flow_format: uploadResults.process_flow_file?.format || "",
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
        timestamp: new Date().toISOString()
      };

      const templateParams = {};
      Object.keys(emailData).forEach(key => {
        templateParams[key] = String(emailData[key] || "");
      });

      await emailjs.send(
        "service_23vxzhp",
        "template_w27qguk",
        templateParams,
        "aYLyR_wMIm_9vdpv1"
      );

      alert("Form submitted successfully! We'll contact you within 24 hours.");
      
      formRef.current.reset();
      setFormData({
        client_name: "",
        client_email: "",
        client_contact: "",
        area_required_sft: "",
        project_timeline: "",
        term_lockin: "",
        activity_type: "",
        mpcb_category: "",
        power_kva: "",
        lighting_lux: "",
        floor_load: "",
        no_of_docks: "",
        process_water: "",
        utilities_area: "",
        crane_type: "",
        no_of_cranes: "",
        crane_transverse: "",
        crane_span: "",
        underhook_height: "",
        crane_capacity: "",
        sprinkler_type: "",
        manpower_details: "",
        etp_details: "",
        effluent_characteristics: "",
        raw_material: "",
        hazardous_material: "",
        msds_details: "",
        company_brief: ""
      });
      setFiles({
        mpcb_certificate: null,
        process_flow_file: null
      });

    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form 
        ref={formRef} 
        onSubmit={sendEmail} 
        className="card border-0 shadow-lg p-4 p-lg-5 rounded-4"
        style={{ backgroundColor: '#ffffff' }}
      >
        <h3 className="text-center mb-4 fw-bold" style={{ color: '#1a1a1a' }}>
          CLIENT REQUIREMENT SHEET - STANDARD BUILDING
        </h3>

        <div className="mb-5">
          <h5 className="mb-4" style={{ 
            color: '#d61f26', 
            borderBottom: '2px solid #d61f26',
            paddingBottom: '8px',
            fontWeight: '600'
          }}>
            <i className="fas fa-user-circle me-2"></i>
            Client Contact Details
          </h5>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold mb-2">Full Name <span className="text-danger">*</span></label>
              <input 
                type="text" 
                name="client_name" 
                className="form-control form-control-lg" 
                value={formData.client_name}
                onChange={handleChange}
                required 
                placeholder="Enter your full name"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold mb-2">Email Address <span className="text-danger">*</span></label>
              <input 
                type="email" 
                name="client_email" 
                className="form-control form-control-lg" 
                value={formData.client_email}
                onChange={handleChange}
                required 
                placeholder="example@company.com"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold mb-2">Contact Number <span className="text-danger">*</span></label>
              <input 
                type="tel" 
                name="client_contact" 
                className="form-control form-control-lg" 
                value={formData.client_contact}
                onChange={handleChange}
                required 
                placeholder="+91 1234567890"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="mb-4" style={{ 
            color: '#d61f26', 
            borderBottom: '2px solid #d61f26',
            paddingBottom: '8px',
            fontWeight: '600'
          }}>
            <i className="fas fa-building me-2"></i>
            Project & Building Information
          </h5>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">1. Area Required in SFT</label>
            <input 
              type="text" 
              name="area_required_sft" 
              className="form-control" 
              value={formData.area_required_sft}
              onChange={handleChange}
              placeholder="e.g., 5000 SFT"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">2. Project Timelines</label>
            <input 
              type="date" 
              name="project_timeline" 
              className="form-control" 
              value={formData.project_timeline}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">3. Term and Lock in</label>
            <input 
              type="text" 
              name="term_lockin" 
              className="form-control" 
              value={formData.term_lockin}
              onChange={handleChange}
              placeholder="e.g., 5 years with 3 years lock-in"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">4. Type of Activity</label>
            <input 
              type="text" 
              name="activity_type" 
              className="form-control" 
              value={formData.activity_type}
              onChange={handleChange}
              placeholder="e.g., Manufacturing"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">5. Categorization of the unit as per MPCB / EC</label>
            <input 
              type="text" 
              name="mpcb_category" 
              className="form-control" 
              value={formData.mpcb_category}
              onChange={handleChange}
              placeholder="e.g., Green"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">Attach Current MPCB Certificate</label>
            <input 
              type="file" 
              name="mpcb_certificate" 
              className="form-control" 
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <small className="text-muted">Max 10MB. PDF, JPG, JPEG, PNG</small>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">6. Power Requirement - Maximum Demand in KVA</label>
            <input 
              type="text" 
              name="power_kva" 
              className="form-control" 
              value={formData.power_kva}
              onChange={handleChange}
              placeholder="e.g., 100 KVA"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">7. Lighting Requirement</label>
            <input 
              type="text" 
              name="lighting_lux" 
              className="form-control" 
              value={formData.lighting_lux}
              onChange={handleChange}
              placeholder="e.g., 300 Lux Industrial standard"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">8. Floor Load Capacity Requirement</label>
            <input 
              type="text" 
              name="floor_load" 
              className="form-control" 
              value={formData.floor_load}
              onChange={handleChange}
              placeholder="e.g., 5 Ton/Sq. Mtr."
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">9. No. of Docks Required</label>
            <input 
              type="number" 
              name="no_of_docks" 
              className="form-control" 
              value={formData.no_of_docks}
              onChange={handleChange}
              placeholder="e.g., 2"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">10. Requirement of Process Water per Day</label>
            <input 
              type="text" 
              name="process_water" 
              className="form-control" 
              value={formData.process_water}
              onChange={handleChange}
              placeholder="e.g., 1000 LPD"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">11. Area Required for Utilities</label>
            <input 
              type="text" 
              name="utilities_area" 
              className="form-control" 
              value={formData.utilities_area}
              onChange={handleChange}
              placeholder="e.g., 200 SFT"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-3">12. Any Crane Requirement</label>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">Type of Crane</label>
                <input 
                  type="text" 
                  name="crane_type" 
                  className="form-control" 
                  value={formData.crane_type}
                  onChange={handleChange}
                  placeholder="e.g., EOT"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">No. of Cranes Needed</label>
                <input 
                  type="number" 
                  name="no_of_cranes" 
                  className="form-control" 
                  value={formData.no_of_cranes}
                  onChange={handleChange}
                  placeholder="e.g., 2"
                  min="0"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">Transverse Length Needed</label>
                <input 
                  type="text" 
                  name="crane_transverse" 
                  className="form-control" 
                  value={formData.crane_transverse}
                  onChange={handleChange}
                  placeholder="e.g., 20 meters"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">Span Needed</label>
                <input 
                  type="text" 
                  name="crane_span" 
                  className="form-control" 
                  value={formData.crane_span}
                  onChange={handleChange}
                  placeholder="e.g., 25 meters"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">Underhook Height Needed</label>
                <input 
                  type="text" 
                  name="underhook_height" 
                  className="form-control" 
                  value={formData.underhook_height}
                  onChange={handleChange}
                  placeholder="e.g., 8 meters"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold mb-2">Load Handling Capacity</label>
                <input 
                  type="text" 
                  name="crane_capacity" 
                  className="form-control" 
                  value={formData.crane_capacity}
                  onChange={handleChange}
                  placeholder="e.g., 10 Tons"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">13. Requirement & Type of Sprinklers</label>
            <input 
              type="text" 
              name="sprinkler_type" 
              className="form-control" 
              value={formData.sprinkler_type}
              onChange={handleChange}
              placeholder="e.g., Wet pipe sprinkler system"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">14. Details of Manpower</label>
            <input 
              type="text" 
              name="manpower_details" 
              className="form-control" 
              value={formData.manpower_details}
              onChange={handleChange}
              placeholder="e.g., 3 shifts, 50 people per shift"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">15. Details of Effluent Treatment Plant</label>
            <input 
              type="text" 
              name="etp_details" 
              className="form-control" 
              value={formData.etp_details}
              onChange={handleChange}
              placeholder="e.g., 100 KLD capacity"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">16. Characteristics of Effluent</label>
            <input 
              type="text" 
              name="effluent_characteristics" 
              className="form-control" 
              value={formData.effluent_characteristics}
              onChange={handleChange}
              placeholder="e.g., pH, BOD, COD levels"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">17. List of Raw Material</label>
            <input 
              type="text" 
              name="raw_material" 
              className="form-control" 
              value={formData.raw_material}
              onChange={handleChange}
              placeholder="e.g., Steel, Plastic, Chemicals"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">18. Any Hazardous Material</label>
            <input 
              type="text" 
              name="hazardous_material" 
              className="form-control" 
              value={formData.hazardous_material}
              onChange={handleChange}
              placeholder="e.g., Flammable liquids, toxic chemicals"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">19. MSDS Sheet</label>
            <input 
              type="text" 
              name="msds_details" 
              className="form-control" 
              value={formData.msds_details}
              onChange={handleChange}
              placeholder="Details of Material Safety Data Sheets"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">20. Process Flow Chart</label>
            <input 
              type="file" 
              name="process_flow_file" 
              className="form-control" 
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            />
            <small className="text-muted">Max 10MB. PDF, DOC, DOCX, JPG, JPEG, PNG</small>
          </div>

          <div className="mb-5">
            <label className="form-label fw-semibold mb-2">21. Company Brief</label>
            <textarea 
              name="company_brief" 
              className="form-control" 
              rows="4"
              value={formData.company_brief}
              onChange={handleChange}
              placeholder="Brief description of your company..."
            ></textarea>
          </div>
        </div>

        <motion.button 
          className="btn btn-lg w-100 py-3 fw-bold"
          style={{
            backgroundColor: loading ? '#666' : '#d61f26',
            borderColor: loading ? '#666' : '#d61f26',
            color: '#ffffff',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Submitting...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane me-2"></i>
              Submit Client Requirement
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ProjectDetailsForm;