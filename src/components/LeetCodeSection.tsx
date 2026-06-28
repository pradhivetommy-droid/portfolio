import { Code2, ExternalLink, RefreshCw } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';

const LEETCODE_USERNAME = 'Ragulpradhive';
const PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
const STATS_URL = `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`;
const REFRESH_INTERVAL = 5 * 60 * 1000;

type LeetCodeStats = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

const difficulties = [
  { key: 'easySolved', label: 'Easy', color: '#00b8a3' },
  { key: 'mediumSolved', label: 'Medium', color: '#ffc01e' },
  { key: 'hardSolved', label: 'Hard', color: '#ef4743' },
] as const;

export function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const loadStats = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(STATS_URL);
      if (!response.ok) throw new Error('Unable to load LeetCode statistics');

      const data = (await response.json()) as LeetCodeStats;
      setStats(data);
      setUpdatedAt(new Date());
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStats();
    const interval = window.setInterval(() => void loadStats(), REFRESH_INTERVAL);
    return () => window.clearInterval(interval);
  }, [loadStats]);

  const maxDifficultyCount = stats
    ? Math.max(stats.easySolved, stats.mediumSolved, stats.hardSolved, 1)
    : 1;

  return (
    <section id="leetcode" className="relative overflow-hidden bg-canvas px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <FadeIn className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200">
              Live coding progress
            </p>
            <h2 className="hero-heading text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none">
              LeetCode
            </h2>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-cyan-200 hover:text-cyan-200"
          >
            @{LEETCODE_USERNAME}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 rounded-[36px] border border-white/15 bg-white/[0.04] p-5 shadow-2xl backdrop-blur sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div className="flex min-h-64 flex-col items-center justify-center rounded-[28px] border border-white/10 bg-black/30 p-8 text-center">
            <Code2 className="mb-5 h-10 w-10 text-cyan-200" />
            <p className="text-sm uppercase tracking-[0.3em] text-mist/55">Problems solved</p>
            <p className="mt-2 text-8xl font-black leading-none text-white">
              {stats?.solvedProblem ?? (isLoading ? '...' : '—')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-mist/45">
              <button
                type="button"
                onClick={() => void loadStats()}
                className="inline-flex items-center gap-2 transition-colors hover:text-cyan-200 disabled:cursor-wait"
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Updating' : 'Refresh'}
              </button>
              {updatedAt && <span>• Updated {updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7 rounded-[28px] border border-white/10 bg-black/20 p-6 sm:p-8">
            {error && !stats ? (
              <div className="text-center">
                <p className="text-lg font-semibold text-mist">Live stats are temporarily unavailable.</p>
                <a href={PROFILE_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-cyan-200 hover:text-white">
                  View progress on LeetCode
                </a>
              </div>
            ) : (
              difficulties.map(({ key, label, color }) => {
                const value = stats?.[key] ?? 0;
                return (
                  <div key={key}>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-lg font-semibold text-mist">{label}</span>
                      <span className="text-2xl font-black text-white">{isLoading && !stats ? '—' : value}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full transition-[width] duration-700"
                        style={{ width: `${(value / maxDifficultyCount) * 100}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
