import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudSlash({
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
          d="M16.25 10.5C16.25 12.571 14.571 14.25 12.5 14.25H7.80353L7.44058 13.7414L14.2134 6.96858C15.4977 7.5611 16.25 8.99202 16.25 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.9219 5.07809C12.1608 3.69118 10.6953 2.75 9 2.75C6.515 2.75 4.5 4.765 4.5 7.25C4.5 7.6 4.549 7.936 4.624 8.263C3.027 8.33 1.75 9.637 1.75 11.25C1.75 12.6039 2.6466 13.7482 3.87849 14.1215L12.9219 5.07809Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.922 5.078C12.161 3.691 10.696 2.75 9 2.75C6.515 2.75 4.5 4.765 4.5 7.25C4.5 7.6 4.549 7.936 4.624 8.263C3.027 8.33 1.75 9.637 1.75 11.25C1.75 12.604 2.647 13.748 3.879 14.121"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.99219 14.25H12.5C14.571 14.25 16.25 12.571 16.25 10.5C16.25 9.26881 15.6525 8.18681 14.7351 7.50711"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CloudSlash;
