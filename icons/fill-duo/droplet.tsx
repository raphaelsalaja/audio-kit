import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Droplet({
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
          d="M9 17C5.5537 17 2.75 14.1885 2.75 10.7329C2.75 7.30129 4.59859 5.37499 6.55569 3.33539C7.17969 2.68549 7.82431 2.01359 8.41611 1.27919C8.70131 0.925694 9.29891 0.925694 9.58411 1.27919C10.1759 2.01359 10.8204 2.68539 11.4445 3.33539C13.4015 5.37499 15.2502 7.30119 15.2502 10.7329C15.2502 14.1885 12.4463 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 14.5C6.9326 14.5 5.25 12.8101 5.25 10.7329C5.25 10.3188 5.5859 9.98289 6 9.98289C6.4141 9.98289 6.75 10.3188 6.75 10.7329C6.75 11.9829 7.7598 13 9 13C9.4141 13 9.75 13.3359 9.75 13.75C9.75 14.1641 9.4141 14.5 9 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Droplet;
