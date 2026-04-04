import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tree({
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
          d="M14.75 14H3.25C2.9673 14 2.7085 13.8408 2.5806 13.5884C2.4532 13.3364 2.4781 13.0337 2.6455 12.8057L5.4434 9H4.25C3.9678 9 3.709 8.8413 3.5811 8.5894C3.4537 8.3379 3.4781 8.0357 3.6446 7.8077L8.3946 1.3077C8.6768 0.921002 9.3233 0.921002 9.6055 1.3077L14.3555 7.8077C14.522 8.0357 14.5464 8.338 14.419 8.5894C14.2911 8.8414 14.0323 9 13.7501 9H12.5567L15.3546 12.8057C15.5221 13.0337 15.547 13.3365 15.4195 13.5884C15.2916 13.8408 15.0327 14 14.75 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.25 14V16.25C8.25 16.6641 8.5859 17 9 17C9.4141 17 9.75 16.6641 9.75 16.25V14H8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tree;
