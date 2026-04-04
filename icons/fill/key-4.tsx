import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key4({
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
          d="M8.97299 17.2031C9.2333 17.2079 9.47745 17.0773 9.61799 16.8581L10.9004 14.8581C10.9779 14.7373 11.019 14.5968 11.019 14.4533L11.019 12.9561C11.019 12.7572 10.94 12.5664 10.7994 12.4258L9.86528 11.4917L10.7997 10.5573C10.9404 10.4166 11.0194 10.2258 11.0194 10.0269L11.0192 8.01976L7.0545 8.06607L7.05463 14.4533C7.05463 14.5875 7.09067 14.7193 7.15896 14.8349L8.34096 16.8348C8.47343 17.059 8.71267 17.1984 8.97299 17.2031Z"
          fill={secondaryfill}
        />
        <path
          d="M13.5 5.22379C13.5 7.70907 11.4853 9.72379 9 9.72379C6.51472 9.72379 4.5 7.70907 4.5 5.22379C4.5 2.7385 6.51472 0.723785 9 0.723785C11.4853 0.723785 13.5 2.7385 13.5 5.22379ZM9.43603 3.0782C9.91124 3.25518 10.25 3.71304 10.25 4.25C10.25 4.94037 9.69 5.5 9 5.5C8.31 5.5 7.75 4.94037 7.75 4.25C7.75 3.71304 8.08876 3.25518 8.56397 3.0782C8.69578 3.01422 8.84372 2.97833 9 2.97833C9.15628 2.97833 9.30422 3.01422 9.43603 3.0782Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Key4;
