import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenCircleBolt({
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
          d="M12.765,2.803c2.089,1.272,3.485,3.572,3.485,6.197,0,2.734-1.513,5.114-3.747,6.349"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.235,15.197c-2.089-1.272-3.485-3.572-3.485-6.197,0-2.734,1.513-5.114,3.747-6.349"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.494,1.851l-4.682,7.874c-.138,.231,.029,.524,.298,.524h3.89l-.855,5.77c-.031,.212,.252,.312,.361,.128l4.682-7.874c.138-.231-.029-.524-.298-.524h-3.89l.855-5.77c.031-.212-.252-.312-.361-.128Z"
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

export default OpenCircleBolt;
