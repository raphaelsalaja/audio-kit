import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ruler({
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
          d="M13.243 1.57634L16.4237 4.75699C17.1087 5.44047 17.1078 6.54876 16.4244 7.23226L7.23235 16.4243C6.5489 17.1078 5.44065 17.1088 4.75721 16.4238L1.57637 13.243C0.89135 12.5595 0.892296 11.4511 1.57562 10.7676L10.7677 1.57566C11.4511 0.892224 12.5596 0.89141 13.243 1.57634Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.32317 14.3335L8.26251 15.3942L5.96467 13.0963C5.67177 12.8034 5.67177 12.3286 5.96466 12.0357C6.25756 11.7428 6.73243 11.7428 7.02533 12.0357L9.32317 14.3335Z"
          fill={fill}
        />
        <path
          d="M12 5.75C12.552 5.75 13 5.302 13 4.75C13 4.198 12.552 3.75 12 3.75C11.448 3.75 11 4.198 11 4.75C11 5.302 11.448 5.75 12 5.75Z"
          fill={fill}
        />
        <path
          d="M13.5503 10.1063L12.4897 11.167L10.1918 8.86914C9.89894 8.57625 9.89894 8.10137 10.1918 7.80848C10.4847 7.51559 10.9596 7.51559 11.2525 7.80848L13.5503 10.1063Z"
          fill={fill}
        />
        <path
          d="M11.4368 12.2199L10.3761 13.2806L8.75959 11.664C8.46669 11.3711 8.46669 10.8963 8.75959 10.6034C9.05248 10.3105 9.52735 10.3105 9.82025 10.6034L11.4368 12.2199Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ruler;
