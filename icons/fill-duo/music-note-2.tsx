import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2({
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
          d="M3 13.25C3 11.1788 4.6789 9.5 6.75 9.5C8.8211 9.5 10.5 11.1788 10.5 13.25C10.5 15.3212 8.8211 17 6.75 17C4.6789 17 3 15.3212 3 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.3825 1.34689C10.2034 1.06588 9.86029 0.936731 9.54031 1.02991C9.22015 1.12314 9 1.41655 9 1.75V10.2497C9.91084 10.9338 10.5 12.023 10.5 13.25V3.91276C11.3096 4.80459 12.4669 5.88172 13.8909 6.65842C14.2545 6.85677 14.7101 6.72278 14.9084 6.35914C15.1068 5.9955 14.9728 5.53993 14.6091 5.34158C13.3372 4.64777 12.2779 3.65263 11.5282 2.81299C11.1559 2.39601 10.866 2.02423 10.6704 1.75851C10.5712 1.62376 10.4732 1.48759 10.3825 1.34689Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MusicNote2;
