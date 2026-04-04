import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle({
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
          d="M12.5,4.5h-3.762c-.199,0-.39,.079-.53,.22-.052,.052-.086,.117-.12,.18,1.567,.704,2.663,2.271,2.663,4.1s-1.096,3.397-2.663,4.1c.127,.235,.366,.4,.652,.4h3.762c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Z"
          fill={fill}
        />
        <path
          d="M6.25,14.25c-2.895,0-5.25-2.355-5.25-5.25S3.355,3.75,6.25,3.75s5.25,2.355,5.25,5.25-2.355,5.25-5.25,5.25Zm0-9c-2.068,0-3.75,1.682-3.75,3.75s1.682,3.75,3.75,3.75,3.75-1.682,3.75-3.75-1.682-3.75-3.75-3.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Toggle;
