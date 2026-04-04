import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationBounce({
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
          d="M13.75 9.5C15.5449 9.5 17 8.04493 17 6.25C17 4.45507 15.5449 3 13.75 3C11.9551 3 10.5 4.45507 10.5 6.25C10.5 8.04493 11.9551 9.5 13.75 9.5Z"
          fill={fill}
        />
        <path
          d="M1.27274 3.17145C1.59226 2.90786 2.06497 2.9532 2.32856 3.27271C3.10185 4.21007 4.00139 5.5006 4.74634 7.16205C5.27488 8.34044 5.62284 9.47596 5.84938 10.5163C5.959 10.301 6.07929 10.0829 6.21133 9.86341C6.81123 8.86701 7.48707 8.11534 8.06625 7.57431C8.36895 7.29156 8.84355 7.30773 9.1263 7.61042C9.40905 7.91312 9.39288 8.38772 9.09019 8.67047C8.59183 9.13599 8.01157 9.7815 7.49671 10.6366C6.61026 12.1104 6.3397 13.5094 6.24515 14.3353C6.19994 14.7302 5.85443 15.0213 5.45754 14.9988C5.06066 14.9763 4.75028 14.648 4.75002 14.2505C4.74906 12.7747 4.54977 10.389 3.37766 7.77583C2.69861 6.26133 1.87817 5.08389 1.17148 4.22727C0.90789 3.90775 0.953226 3.43505 1.27274 3.17145Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default AnimationBounce;
