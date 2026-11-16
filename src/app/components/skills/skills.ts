
import { Component, signal, computed, effect } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  // Categories
  categories: string[] = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Database',
    'Cybersecurity',
    'Security Tools',
    'Development Tools'
  ];

  // Skills data
  skills: Skill[] = [
    { name: 'C#', category: 'Programming Languages', icon: 'code' },

    { name: 'Angular', category: 'Frontend Development', icon: 'monitor' },
    { name: 'TypeScript', category: 'Frontend Development', icon: 'code' },
    { name: 'HTML', category: 'Frontend Development', icon: 'monitor' },
    { name: 'CSS', category: 'Frontend Development', icon: 'monitor' },
    

    { name: 'ASP.NET Core', category: 'Backend Development', icon: 'server' },
    { name: 'Web API', category: 'Backend Development', icon: 'server' },
    { name: 'Entity Framework Core', category: 'Backend Development', icon: 'server' },
    { name: 'REST API', category: 'Backend Development', icon: 'server' },

    { name: 'SQL Server', category: 'Database', icon: 'database' },
    { name: 'MySQL', category: 'Database', icon: 'database' },

    { name: 'Networking', category: 'Cybersecurity', icon: 'shield' },
    { name: 'SOC Fundamentals', category: 'Cybersecurity', icon: 'shield' },
    { name: 'Web Application Pentesting', category: 'Cybersecurity', icon: 'shield' },

    { name: 'Burp Suite', category: 'Security Tools', icon: 'shield' },
    { name: 'Nmap', category: 'Security Tools', icon: 'network' },
    { name: 'Nessus', category: 'Security Tools', icon: 'shield' },
    { name: 'Wireshark', category: 'Security Tools', icon: 'network' },
    { name: 'Metasploit', category: 'Security Tools', icon: 'terminal' },
    { name: 'OWASP ZAP', category: 'Security Tools', icon: 'shield' },
    { name: 'Wazuh', category: 'Security Tools', icon: 'shield' },
    { name: 'Splunk', category: 'Security Tools', icon: 'chart' },

    { name: 'Git', category: 'Development Tools', icon: 'git-branch' },
    { name: 'GitHub', category: 'Development Tools', icon: 'github' },
    { name: 'Postman', category: 'Development Tools', icon: 'send' },
    { name: 'Visual Studio', category: 'Development Tools', icon: 'code' },
    { name: 'VS Code', category: 'Development Tools', icon: 'code' }
  ];

  // SIGNAL: Stores the search text
  searchTerm = signal('');

  // COMPUTED: Filters skills based on search text
  filteredSkills = computed(() => {

    const search = this.searchTerm().trim().toLowerCase();

    if (!search) {
      return this.skills;
    }

    return this.skills.filter(skill =>
      skill.name.toLowerCase().includes(search)
    );

  });

  // EFFECT: Executes whenever searchTerm changes
  constructor() {

    effect(() => {

      console.log('Search changed:', this.searchTerm());

    });

  }

}
