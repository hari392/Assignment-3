document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside a');
    const contentArea = document.getElementById('content-area');
  
    // Content for each topic
    const content = {
      topic1: `<h3> Sales Handover Information</h3>
        <h2>1.1 Project Overview</h2>
        <ul>
          <li><strong>Project Name:</strong>TBD</li>
          <li><strong>Project Start Date:</strong>TBD</li>
          <li><strong>Target Go-Live Date:</strong>TBD</li>
          <li><strong>Contract Reference Number:</strong> TBD</li>
          <li><strong>Contract Duration:</strong> TBD</li>
          <li><strong>Project Scope Summary:</strong>TBD</li>
        </ul>
        <h2>1.2 Customer Information</h2>
        <ul>
          <li><strong>Organization Name:</strong>TBD</li>
          <li><strong>Primary Business Domain:</strong>TBD</li>
          <li><strong>Business Scale:</strong>TBD</li>
          <li><strong>Current Systems/Platforms:</strong>TBD</li>
          <li><strong>Target Environment:</strong>TBD</li>
        </ul>
        <h2>1.3 Commercial Terms</h2>
        <ul>
          <li><strong>Contract Value:</strong> TBD</li>
          <li><strong>Payment Terms:</strong>TBD</li>
          <li><strong>Payment Milestones:</strong>TBD</li>
          <li><strong>Additional Cost Considerations:</strong>TBD</li>
        </ul>`,
      topic2: `<h3>Project Organization</h3>
            <h2>2.1 Governance Structure</h2>
            <ul>
                <li><strong>Steering Committee:</strong>TBD</li>
                <li><strong>Project Management:</strong>TBD</li>
                <li><strong>Working Teams:</strong>TBD</li>
            </ul>
            <h2>2.2 Stakeholder Information</h2>
            <ul>
                <li><strong>Customer Team:</strong></li>
                <ul>
                    <li><strong>Project Sponsor:</strong> TBD</li>
                    <li><strong>Project Manager:</strong> TBD</li>
                    <li><strong>Business Representatives:</strong>TBD</li>
                    <li><strong>IT Team:</strong> TBD</li>
                </ul>
                <li><strong>Implementation Team:</strong></li>
                <ul>
                    <li><strong>Project Manager:</strong>TBD</li>
                    <li><strong>Technical Leads:</strong> TBD</li>
                    <li><strong>Functional Consultants:</strong> TBD</li>
                    <li><strong>Development Team:</strong> TBD</li>
                    <li><strong>Quality Team:</strong> TBD</li>
                    <li><strong>Infrastructure Team:</strong> TBD</li>
                    <li><strong>Support Specialists:</strong> TBD</li>
                    <li><strong>SQL DBA:</strong> TBD</li>
                </ul>
            </ul>
            <h2>2.3 Roles and Responsibilities</h2>
            <ul>
                <li><strong>Customer Responsibilities:</strong>TBD</li>
                    
                <li><strong>Implementation Team Responsibilities:</strong>TBD </li>
                    
                <li><strong>Third-Party Responsibilities:</strong> TBD</li>
             </ul>`,
      topic3: `<h3>Solution Scope</h3>
            <h2>3.1 Products/Modules</h2>
            <ul>
                <li><strong>Core Modules:</strong>TBD</li>
                <li><strong>Optional Modules:</strong> TBD</li>
                <li><strong>Future Modules:</strong>TBD</li>
            </ul>
            <h2>3.2 Functional Requirements</h2>
            <ul>
                <li><strong>Business Processes:</strong>TBD</li>
                <li><strong>Workflows:</strong> TBD</li>
                <li><strong>Reports:</strong> TBD</li>
                <li><strong>User Interface Requirements:</strong>TBD</li>
            </ul>
            <h2>3.3 Technical Requirements</h2>
            <ul>
                <li><strong>Infrastructure Requirements:</strong>TBD
                </li>
                <li><strong>Integration Requirements:</strong>TBD
                </li>
                <li><strong>Security Requirements:</strong>TBD
                </li>
                <li><strong>Performance Requirements:</strong>TBD
                </li>
            </ul>
            <h2>3.4 Data Requirements</h2>
            <ul>
                <li><strong>Data Migration Scope:</strong>TBD
                </li>
                <li><strong>Data Volume:</strong>TBD</li>
                <li><strong>Data Quality Requirements:</strong>TBD</li>
                <li><strong>Data Retention Requirements:</strong>TBD</li>
    </ul>`,
      topic4: `<h3>Implementation Approach</h3>
            <h2>4.1 Implementation Methodology</h2>
            <ul>
                <li><strong>Phase Breakdown:</strong>TBD</li>
                
                <li><strong>Deliverables:</strong>TBD</li>
                    
                <li><strong>Timelines:</strong>TBD</li>
                <li><strong>Dependencies:</strong> TBD</li>
            </ul>
            <h2>4.2 Environment Strategy</h2>
            <ul>
                <li><strong>Development Environment:</strong>TBD</li>
                <li><strong>Testing Environment:</strong>TBD</li>
                <li><strong>UAT Environment:</strong> TBD</li>
                <li><strong>Production Environment:</strong> TBD</li>
                <li><strong>DR Environment:</strong> TBD</li>
            </ul>
            <h2>4.3 Testing Strategy</h2>
            <ul>
                <li><strong>Testing Phases:</strong>TBD</li>
                    
                <li><strong>Testing Types:</strong>TBD </li>
                    
                <li><strong>Testing Tools:</strong> TBD</li>
                <li><strong>Testing Responsibilities:</strong>TBD</li>
            </ul>
            <h2>4.4 Training Strategy</h2>
            <ul>
                <li><strong>Training Approach:</strong> TBD</li>
                <li><strong>Training Schedule:</strong> TBD</li>
                <li><strong>Training Materials:</strong>TBD</li>
                <li><strong>Training Environment:</strong> TBD</li>
            </ul>
          </ul>`,
      topic5: `<h3>Change Management</h3>
            <h2>5.1 Organizational Change Management</h2>
            <ul>
                <li><strong>Impact Assessment:</strong>TBD</li>
                <li><strong>Stakeholder Management:</strong> TBD</li>
                <li><strong>Communication Plan:</strong>TBD</li>
                <li><strong>Resistance Management:</strong> TBD</li>
            </ul>
            <h2>5.2 Business Process Management</h2>
            <ul>
                <li><strong>Process Mapping:</strong> TBD</li>
                <li><strong>Process Documentation:</strong> TBD</li>
                <li><strong>Process Training:</strong>TBD</li>
                <li><strong>Process Transition:</strong> TBD</li>
            </ul>
            <h2>5.3 User Adoption Strategy</h2>
            <ul>
                <li><strong>Adoption Metrics:</strong> TBD</li>
                <li><strong>Support Structure:</strong> TBD</li>
                <li><strong>User Feedback:</strong>TBD</li>
                <li><strong>Continuous Improvement:</strong> TBD</li>
    </ul>`,
      topic6: `<h3>Quality & Performance Management</h3>
            <h2>6.1 Quality Management</h2>
            <ul>
                <li><strong>Quality Objectives:</strong> TBD</li>
                <li><strong>Quality Metrics:</strong> TBD</li>
                <li><strong>Quality Control Process:</strong>TBD</li>
                <li><strong>Quality Reporting:</strong> TBD</li>
            </ul>
            <h2>6.2 Performance Management</h2>
            <ul>
                <li><strong>Performance Metrics:</strong>
                    TBD
                </li>
                <li><strong>Monitoring Strategy:</strong>TBD</li>
                <li><strong>Performance Testing:</strong> TBD</li>
                <li><strong>Optimization Process:</strong>TBD</li>
    </ul>`,
      topic7: `<h3>7. Security & Compliance</h3>
            <h2>7.1 Security Framework</h2>
            <ul>
                <li><strong>Access Control:</strong>TBD</li>
                <li><strong>Authentication & Authorization:</strong>TBD</li>
                <li><strong>Security Monitoring:</strong> TBD</li>
                <li><strong>Security Testing:</strong>TBD</li>
            </ul>
            <h2>7.2 Compliance Management</h2>
            <ul>
                <li><strong>Regulatory Requirements:</strong> TBD</li>
                <li><strong>Compliance Testing:</strong> TBD</li>
                <li><strong>Audit Requirements:</strong> TBD</li>
                <li><strong>Documentation Requirements:</strong> TBD</li>
    </ul>`,
      topic8: `<h3>8. Go-Live Preparation</h3>
            <h2>8.1 Cutover Strategy</h2>
            <ul>
                <li><strong>Pre-Cutover Activities:</strong>TBD</li>
                <li><strong>Cutover Plan:</strong> TBD</li>
                <li><strong>Rollback Plan:</strong> TBD</li>
                <li><strong>Post-Cutover Activities:</strong> TBD</li>
            </ul>
            <h2>8.2 Business Continuity</h2>
            <ul>
                <li><strong>Business Impact Analysis:</strong> TBD</li>
                <li><strong>Contingency Plans:</strong> TBD</li>
                <li><strong>Recovery Procedures:</strong> TBD</li>
                <li><strong>Emergency Response:</strong>TBD</li>
            </ul>
            <h2>8.3 Operational Readiness</h2>
            <ul>
                <li><strong>Operations Documentation:</strong>TBD</li>
                <li><strong>Support Team Readiness:</strong>TBD</li>
                <li><strong>Monitoring Setup:</strong> TBD</li>
                <li><strong>Maintenance Procedures:</strong> TBD</li>
    </ul>`,
      topic9: `<h3> Post Go-Live Support</h3>
      <h2>9.1 Support Model</h2>
     <ul>
                <li><strong>Support Levels:</strong>TBD</li>
                <li><strong>Support Team Structure:</strong> TBD</li>
                <li><strong>Escalation Matrix:</strong> TBD</li>
                <li><strong>SLA Framework:</strong> TBD</li>
            </ul>
            <h2>9.2 Knowledge Management</h2>
            <ul>
                <li><strong>Knowledge Transfer Plan:</strong>TBD</li>
                <li><strong>Documentation Repository:</strong> TBD</li>
                <li><strong>Training Materials:</strong> TBD</li>
                <li><strong>Maintenance Guides:</strong> TBD</li>
    </ul>`,
      topic10: `<h3> Sign-off Requirements</h3>
      <h2>10.1 Phase Sign-offs</h2>
    <ul>
      <li><strong>Requirement Sign-off:</strong> TBD</li>
                <li><strong>Design Sign-off:</strong> TBD</li>
                <li><strong>Testing Sign-off:</strong> TBD</li>
                <li><strong>Training Sign-off:</strong> TBD</li>
            </ul>
            <h2>10.2 Final Sign-offs</h2>
            <ul>
                <li><strong>User Acceptance:</strong>TBD</li>
                <li><strong>Go-Live Approval:</strong> TBD</li>
                <li><strong>Project Closure:</strong> TBD</li>
                <li><strong>Support Transition:</strong> TBD</li>
    </ul>`,
      topic11: ` <h3> Additional Information</h3>
      <h2>11.1 Assumptions & Dependencies</h2>
    <ul>
      <li><strong>Base Product Costs:</strong> TBD</li>
      <ul>
                    <li>Product A : TBD</li>
                    <li>Product B : TBD</li>
                    <li>Product C : TBD</li>
                </ul>
                <li><strong>Additional Costs:</strong></li>
                <ul>
                    <li>Implementation: TBD</li>
                    <li>Support: TBD</li>
                    <li>Infrastructure: TBD</li>
                    <li>Training: TBD</li>
                </ul>
            </ul>
            <h2>11.2 Payment Schedule</h2>
            <ul>
                <li><strong>Initial Payment:</strong> TBD</li>
                <li><strong>Milestone Payments:</strong>TBD</li>
                <li><strong>Recurring Payments:</strong> TBD</li>
                <li><strong>Additional Service Payments:</strong> TBD</li>
    </ul>`,
      topic12: `<h3>12. High-Level Project Plan</h3>
            <h2>12.1 Phase 1 (Months 1-3)</h2>
            <ul>
                <li><strong>Duration:</strong> TBD</li>
                <li><strong>Key Activities:</strong> TBD</li>
                <li><strong>Milestones:</strong> TBD</li>
                <li><strong>Dependencies:</strong> TBD</li>
            </ul>
            <h2>12.2 Phase 2 (Months 4-6)</h2>
            <ul>
                <li><strong>Duration:</strong> TBD</li>
                <li><strong>Key Activities:</strong> TBD</li>
                <li><strong>Milestones:</strong> TBD</li>
                <li><strong>Dependencies:</strong> TBD</li>
                </ul>`,
      topic13: `<h3>13. Supporting Documents</h3>
            <h2>13.1 Required Documents</h2>
            <ol>
                <li><strong>Customer Contract</strong>
                    <ul>
                        <li><strong>Main Agreement:</strong> TBD</li>
                        <li><strong>Service Level Agreement (SLA):</strong>TBD</li>
                        <li><strong>Statement of Work (SOW):</strong> TBD</li>
                        <li><strong>Non-Disclosure Agreement (NDA):</strong> TBD</li>
                    </ul>
                </li>
                <li><strong>Sales Cost Sheet</strong>
                    <ul>
                        <li><strong>Product Pricing:</strong>TBD</li>
                        <li><strong>Implementation Costs:</strong> TBD</li>
                        <li><strong>Support Costs:</strong> TBD/li>
                        <li><strong>Additional Services:</strong> TBD</li>
                    </ul>
                </li>
                <li><strong>Product Fact Sheet</strong>
                    <ul>
                        <li><strong>Product Features:</strong> TBD</li>
                        <li><strong>Technical Specifications:</strong> TBD</li>
                        <li><strong>Integration Capabilities:</strong>TBD</li>
                        <li><strong>System Requirements:</strong> TBD</li>
                    </ul>
                </li>
            </ol>
            <h2>13.2 Document Version Control</h2>
            <ul>
                <li><strong>Document Versions:</strong>TBD</li>
                <li><strong>Change History:</strong> TBD</li>
                <li><strong>Approval Status:</strong>TBD</li>
                <li><strong>Repository Location:</strong> TBD</li>
            </ul>`,
      topic14: `<h3>14. Additional Information</h3>
            <h2>14.1 Assumptions & Dependencies</h2>
            <ul>
                <li><strong>Key Assumptions:</strong>TBD</li>
                    
                <li><strong>External Dependencies:</strong>TBD</li>
                    
                <li><strong>Constraints:</strong>TBD</li>
                    
                <li><strong>Prerequisites:</strong>TBD</li>
                    
            </ul>

            <h2>14.2 Risk Management</h2>
            <ul>
                <li><strong>Risk Categories:</strong>TBD</li>
                    
                <li><strong>Risk Assessment:</strong>TBD </li>
                    
                <li><strong>Mitigation Strategies:</strong> TBD</li>
                    
                <li><strong>Risk Monitoring:</strong>TBD </li>
                    
            </ul>`,              
    };
  
    // Add click event listener to each link
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const topic = e.target.getAttribute('data-content');
        contentArea.innerHTML = content[topic] || '<h2>Not Found</h2><p>No content available.</p>';
      });
    });
  });
  