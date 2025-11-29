/**
 * 상세 설명 텍스트를 파싱하여 섹션별로 분리합니다.
 * # 기호를 기준으로 섹션을 나누고, 줄바꿈을 처리합니다.
 * 
 * @example
 * Input: "#참여자\n• Paul Feng - VP\n• Paula Wang - MD\n#발표\n내용"
 * Output: [
 *   { title: "참여자", items: ["• Paul Feng - VP", "• Paula Wang - MD"] },
 *   { title: "발표", items: ["내용"] }
 * ]
 */

export interface DetailSection {
  title: string;
  items: string[];
}

export function parseDetails(details: string): DetailSection[] {
  if (!details || details.trim() === '') {
    return [];
  }

  const sections: DetailSection[] = [];
  
  // # 기준으로 섹션 분리 (첫 번째 빈 요소 제거)
  const parts = details.split('#').filter(part => part.trim() !== '');
  
  for (const part of parts) {
    const lines = part.split('\n');
    const title = lines[0]?.trim() || '';
    
    // 첫 번째 줄(제목)을 제외한 나머지 줄들
    const items = lines
      .slice(1)
      .map(line => line.trim())
      .filter(line => line !== '');
    
    if (title) {
      sections.push({ title, items });
    }
  }
  
  return sections;
}

/**
 * 날짜 문자열을 포맷팅합니다.
 * @example "2025-11-14" -> "2025.11.14"
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  return dateStr.replace(/-/g, '.');
}
