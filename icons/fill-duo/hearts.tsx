import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hearts({
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
          d="M6.75003 16.4956C6.51563 16.4956 6.28124 16.4399 6.06744 16.3281C4.87894 15.7085 1.00003 13.3852 1.00003 9.51118C0.992229 7.59078 2.55271 6.01658 4.47851 6.00488C5.32911 6.01608 6.12893 6.32569 6.75003 6.86179C7.37013 6.32569 8.16603 6.01608 9.00683 6.00488C10.9472 6.01658 12.5078 7.59078 12.5 9.51418C12.5 13.3833 8.62112 15.708 7.43262 16.3282C7.21972 16.44 6.98443 16.4956 6.75003 16.4956Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.0361 11.7734C12.3243 11.0914 12.5 10.3378 12.5 9.51418C12.5078 7.59078 10.9472 6.01658 9.00683 6.00488C8.16603 6.01608 7.37013 6.32569 6.75003 6.86179C6.4198 6.57675 6.03903 6.35574 5.62698 6.20957C5.54509 5.82825 5.50003 5.42872 5.50003 5.01118C5.49223 3.09078 7.05271 1.51658 8.97851 1.50488C9.82911 1.51608 10.6289 1.82569 11.25 2.36179C11.8701 1.82569 12.666 1.51608 13.5068 1.50488C15.4472 1.51658 17.0078 3.09078 17 5.01418C17 8.77738 13.3306 11.0796 12.0361 11.7734Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hearts;
