document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside a');
    const contentArea = document.getElementById('content-area');
  
    // Content for each topic
    const content = {
      topic1: `<h2>Sales Handover Information</h2>

  <h3>1.1 Project Overview</h3>
  <ul>
    <li><strong>Project Name:</strong> STCI Implementation</li>
    <li><strong>Project Start Date:</strong> TBD</li>
    <li><strong>Target Go-Live Date:</strong> Track 1 (5 months), Track 2 (8 months) from project kick-off</li>
    <li><strong>Contract Reference Number:</strong> STCI/IT/2023-24/1</li>
    <li><strong>Contract Duration:</strong> 5 years with 3 years lock-in period</li>
    <li><strong>Project Scope Summary:</strong> Implementation of LOS, LMS, Collections application for end-to-end digital transformation of lending operations</li>
  </ul>

  <h3>1.2 Customer Information</h3>
  <ul>
    <li><strong>Organization Name:</strong> STCI Finance Ltd (formerly Securities Trading Corporation of India Limited)</li>
    <li><strong>Primary Business Domain:</strong> Financial Services (Systemically Important Non-Deposit taking NBFC)</li>
    <li><strong>Business Scale:</strong> Mid-market B2B NBFC</li>
    <li><strong>Current Systems/Platforms:</strong> FISS (Legacy System)</li>
    <li><strong>Target Environment:</strong>
      <ul>
        <li>Option 1: On-Prem Data Centre/STCI's Private Cloud</li>
        <li>Option 2: Uncia Secured Cloud</li>
      </ul>
    </li>
  </ul>

  <h3>1.3 Commercial Terms</h3>
  <ul>
    <li><strong>Contract Value:</strong> Based on Value Based Pricing (VBP) slabs
      <ul>
        <li>VBP Slabs: From INR 3000 Crore to INR 10000 Crore AUM</li>
        <li>Implementation Fee for LOS: INR 1,50,00,000</li>
      </ul>
    </li>
    <li><strong>Payment Terms:</strong>
      <ul>
        <li><strong>LMS/SCF/50Fin:</strong> Subscription from PO/contract signing date</li>
        <li><strong>LOS Implementation:</strong>
          <ul>
            <li>25% with PO</li>
            <li>25% on solution mapping document</li>
            <li>25% on UAT delivery</li>
            <li>25% on UAT sign-off</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Additional Cost Considerations:</strong>
      <ul>
        <li>On-site support: INR 1,75,000 per man month per FTE</li>
        <li>Travel and accommodation on actuals</li>
      </ul>
    </li>
  </ul>`,
      topic2: `<h2>Project Organization</h2>

  <h3>2.1 Governance Structure</h3>
  <ul>
    <li><strong>Steering Committee:</strong> Project Sponsor, Uncia and STCI representatives</li>
    <li><strong>Project Management:</strong> Uncia and STCI Project Managers</li>
    <li><strong>Working Teams:</strong>
      <ul>
        <li>Functional Consultants</li>
        <li>Technical Consultants</li>
        <li>Development Consultants</li>
        <li>Business Representatives</li>
        <li>IT Manager</li>
        <li>Solution Supervisors</li>
      </ul>
    </li>
  </ul>

  <h3>2.2 Stakeholder Information</h3>
  <ul>
    <li><strong>Primary Contact:</strong>
      <ul>
        <li><strong>Name:</strong> Prakhar Gupta</li>
        <li><strong>Role:</strong> Sales Manager</li>
        <li><strong>Mobile:</strong> 9893869145</li>
        <li><strong>Email:</strong> <a href="mailto:prakhargupta@uncia.ai">prakhargupta@uncia.ai</a></li>
      </ul>
    </li>
    <li><strong>Secondary Contact:</strong>
      <ul>
        <li><strong>Name:</strong> Arya Pratihar</li>
        <li><strong>Role:</strong> Chief Revenue Officer</li>
        <li><strong>Mobile:</strong> 8017357699</li>
        <li><strong>Email:</strong> <a href="mailto:aryapratihar@uncia.ai">aryapratihar@uncia.ai</a></li>
      </ul>
    </li>
  </ul>

  <h3>2.3 Roles and Responsibilities</h3>
  <ul>
    <li><strong>Customer Responsibilities:</strong>
      <ul>
        <li>Infrastructure setup (Option 1)</li>
        <li>L1 support</li>
        <li>End user training</li>
        <li>UAT execution</li>
        <li>Branch level rollout</li>
        <li>Data quality and reconciliation</li>
      </ul>
    </li>
    <li><strong>Implementation Team Responsibilities:</strong>
      <ul>
        <li>Project implementation</li>
        <li>Application configuration</li>
        <li>L2 & L3 support</li>
        <li>Core user training</li>
      </ul>
    </li>
    <li><strong>Third-Party Responsibilities:</strong>
      <ul>
        <li>Integration with external systems</li>
      </ul>
    </li>
  </ul>`,
      topic3: `<h2>Solution Scope</h2>

  <h3>3.1 Products/Modules</h3>
  <ul>
    <li><strong>Core Modules:</strong>
      <ul>
        <li>Uncia Loan Management System (LMS)</li>
        <li>Uncia Loan Origination System (LOS)</li>
        <li>Uncia Supply Chain Finance (SCF)</li>
        <li>50 Fin (Strategic partner for LAS)</li>
      </ul>
    </li>
  </ul>

  <h3>3.2 Functional Requirements</h3>
  <ul>
    <li><strong>Business Processes:</strong>
      <ol>
        <li>Corporate Lending</li>
        <li>Construction Finance</li>
        <li>Loan against Securities</li>
        <li>Structured Finance</li>
        <li>Channel Finance</li>
        <li>MSME & Co-Lending</li>
      </ol>
    </li>
    <li><strong>Workflows:</strong> Customizable by business line</li>
    <li><strong>Reports:</strong> Standard + 20 custom reports</li>
    <li><strong>User Interface:</strong> Web-based application</li>
  </ul>

  <h3>3.3 Technical Requirements</h3>
  <ul>
    <li><strong>Infrastructure Requirements:</strong>
      <ul>
        <li>Option 1: On-premises setup by STCI</li>
        <li>Option 2: Azure cloud by Uncia</li>
      </ul>
    </li>
    <li><strong>Integration Requirements:</strong>
      <ul>
        <li>Karza</li>
        <li>NSDL</li>
        <li>Perfios</li>
        <li>Bureau-One</li>
        <li>CIBIL</li>
        <li>UIDAI (through NPCI)</li>
        <li>FISS</li>
        <li>Tally</li>
        <li>Multiple other integrations</li>
      </ul>
    </li>
    <li><strong>Security Requirements:</strong> As per RBI guidelines</li>
    <li><strong>Performance Requirements:</strong>
      <ul>
        <li>Application uptime: 98%</li>
        <li>Cloud uptime (Option 2): 99.9%</li>
      </ul>
    </li>
  </ul>

  <h3>3.4 Data Requirements</h3>
  <ul>
    <li><strong>Data Migration Scope:</strong> 120 active loan accounts</li>
    <li><strong>Data Volume:</strong> Limited to active accounts</li>
    <li><strong>Data Quality:</strong> STCI responsibility</li>
    <li><strong>Data Retention:</strong> As per regulatory requirements</li>
    </ul>`,
      topic4: `<h2>Implementation Approach</h2>

  <h3>4.1 Implementation Methodology</h3>
  <ul>
    <li><strong>Phase Breakdown:</strong> Two parallel tracks
      <ul>
        <li><strong>Track 1:</strong> LMS, SCF, 50 Fin (5 months)</li>
        <li><strong>Track 2:</strong> LOS (8 months)</li>
      </ul>
    </li>
    <li><strong>Deliverables:</strong> As per Technical Proposal section 6.2</li>
    <li><strong>Dependencies:</strong> Third-party system availability</li>
  </ul>

  <h3>4.2 Environment Strategy</h3>
  <ul>
    <li>Development Environment</li>
    <li>Testing Environment</li>
    <li>UAT Environment</li>
    <li>Production Environment</li>
    <li>DR Environment</li>
  </ul>

  <h3>4.3 Testing Strategy</h3>
  <ul>
    <li><strong>Testing Phases:</strong>
      <ul>
        <li>Unit testing</li>
        <li>Integration testing</li>
        <li>System testing</li>
        <li>UAT</li>
      </ul>
    </li>
    <li><strong>Testing Types:</strong>
      <ul>
        <li>Functional testing</li>
        <li>Performance testing</li>
        <li>Security testing</li>
        <li>Load testing</li>
      </ul>
    </li>
    <li><strong>Testing Responsibilities:</strong> STCI to prepare test cases with Uncia guidance</li>
  </ul>

  <h3>4.4 Training Strategy</h3>
  <ul>
    <li><strong>Training Approach:</strong> Train the Trainer</li>
    <li><strong>Training Location:</strong> Single central location</li>
    <li><strong>Training Materials:</strong> Provided by Uncia</li>
    <li><strong>Training Environment:</strong> Dedicated setup</li>
  </ul>`,
      topic5: `<h2>Change Management</h2>

  <h3>5.1 Change Request Process</h3>
  <ul>
    <li>Change request documentation</li>
    <li>Impact analysis</li>
    <li>Effort estimation</li>
    <li>20% of additional effort cost added to annual subscription</li>
    <li>Approval workflow</li>
  </ul>`,
      topic6: `<h2>Quality & Performance Management</h2>

  <h3>6.1 Service Level Agreements</h3>
  <ul>
    <li><strong>Severity 1 (Critical):</strong> 4 hours restoration, 2 working days resolution</li>
    <li><strong>Severity 2 (Significant):</strong> 8 hours restoration, 4 working days resolution</li>
    <li><strong>Severity 3 (Low):</strong> 24 hours restoration, 7 working days resolution</li>
  </ul>

  <h3>6.2 Performance Management</h3>
  <ul>
    <li><strong>Response time:</strong> 4 seconds for web pages</li>
    <li><strong>Support hours:</strong> 9:30 AM to 6:00 PM IST (Banking Working Days)</li>
    <li>Regular performance monitoring and optimization</li>
  </ul>`,
      topic7: `<h2>Security & Compliance</h2>

  <h3>7.1 Security Framework</h3>
  <ul>
    <li>RBI guideline compliance</li>
    <li>Regular security assessment</li>
    <li>VAPT testing</li>
    <li>Security infrastructure based on deployment option</li>
  </ul>`,
      topic8: `<h2>Go-Live Preparation</h2>

  <h3>8.1 Environments</h3>
  <ul>
    <li>Production setup</li>
    <li>UAT verification</li>
    <li>DR testing</li>
    <li>Data migration validation</li>
  </ul>`,
      topic9: `<h2>Post Go-Live Support</h2>

  <h3>9.1 Support Model</h3>
  <ul>
    <li><strong>L1: </strong> STCI responsibility</li>
    <li><strong>L2/L3: </strong> Uncia offshore support</li>
    <li>Shared support center</li>
    <li>Banking hours support window</li>
  </ul>`,
      topic10: `<h2>Sign-off Requirements</h2>

  <h3>10.1 Sign-offs Required</h3>
  <ul>
    <li>Solution mapping document</li>
    <li>UAT completion</li>
    <li>Data migration</li>
    <li>Go-live readiness</li>
  </ul>`,
      topic11: `<h2>Additional Information</h2>

  <h3>11.1 Assumptions & Dependencies</h3>
  <ul>
    <li>Customer bandwidth availability</li>
    <li>Infrastructure readiness (Option 1)</li>
    <li>Third-party system availability</li>
    <li>Data quality and timely sign-offs</li>
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
  