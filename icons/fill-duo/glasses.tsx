import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glasses({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M1 11.25C1 9.1789 2.67877 7.5 4.75 7.5C6.18296 7.5 7.42807 8.3036 8.05938 9.4847C8.33979 9.33492 8.66001 9.25 9 9.25C9.33999 9.25 9.66021 9.33492 9.94062 9.4847C10.5719 8.3036 11.817 7.5 13.25 7.5C15.3212 7.5 17 9.1789 17 11.25C17 13.3211 15.3212 15 13.25 15C11.1788 15 9.5 13.3211 9.5 11.25C9.5 10.9742 9.27579 10.75 9 10.75C8.72421 10.75 8.5 10.9742 8.5 11.25C8.5 13.3211 6.82123 15 4.75 15C2.67877 15 1 13.3211 1 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.49282 3.63294C4.76054 3.26711 3.88024 3.69247 3.71103 4.4924L3.08613 7.88836C2.10669 8.37403 1.36983 9.27514 1.1059 10.3613L2.24041 4.19675C2.60479 2.4271 4.54756 1.48395 6.16319 2.29107C6.53373 2.47619 6.68406 2.92664 6.49894 3.29719C6.31382 3.66774 5.86337 3.81806 5.49282 3.63294Z"
          fill={fill}
        />
        <path
          d="M15.7596 4.19675C15.3952 2.4271 13.4524 1.48395 11.8368 2.29107C11.4662 2.47619 11.3159 2.92664 11.501 3.29719C11.6862 3.66774 12.1366 3.81806 12.5072 3.63294C13.2394 3.26711 14.1197 3.69248 14.289 4.49241L14.9139 7.88836C15.8933 8.37404 16.6302 9.27516 16.8941 10.3613L15.7596 4.19675Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Glasses;
