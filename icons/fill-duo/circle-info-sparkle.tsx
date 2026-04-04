import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleInfoSparkle({
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
          d="M14.25 8.5C13.2803 8.5 12.4224 7.88201 12.1157 6.96201L11.8462 6.15401L11.0386 5.884C10.1182 5.578 9.5 4.72 9.5 3.75C9.5 2.78 10.1182 1.922 11.0381 1.616L11.1872 1.56599C10.2766 1.20499 9.2876 1 8.25 1C3.8389 1 0.25 4.589 0.25 9C0.25 13.411 3.8389 17 8.25 17C12.6611 17 16.25 13.411 16.25 9C16.25 8.492 16.1972 7.996 16.106 7.513C15.6947 8.118 15.009 8.5 14.25 8.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.9873 3.039L15.4678 2.532L14.9615 1.013C14.8594 0.707 14.5728 0.5 14.2501 0.5C13.9274 0.5 13.6407 0.707 13.5387 1.013L13.0324 2.532L11.5129 3.039C11.2067 3.141 11.0002 3.427 11.0002 3.75C11.0002 4.073 11.2067 4.359 11.5129 4.461L13.0324 4.968L13.5387 6.487C13.6408 6.793 13.9274 7 14.2501 7C14.5728 7 14.8595 6.793 14.9615 6.487L15.4678 4.968L16.9873 4.461C17.2935 4.359 17.5 4.073 17.5 3.75C17.5 3.427 17.2935 3.141 16.9873 3.039Z"
          fill={fill}
        />
        <path
          d="M9 12.75C9 13.1641 8.6641 13.5 8.25 13.5C7.8359 13.5 7.5 13.1641 7.5 12.75V9.5H7C6.5859 9.5 6.25 9.1641 6.25 8.75C6.25 8.3359 6.5859 8 7 8H7.75C8.4395 8 9 8.5605 9 9.25V12.75ZM8.25 6.75C7.698 6.75 7.25 6.301 7.25 5.75C7.25 5.199 7.698 4.75 8.25 4.75C8.802 4.75 9.25 5.199 9.25 5.75C9.25 6.301 8.802 6.75 8.25 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleInfoSparkle;
