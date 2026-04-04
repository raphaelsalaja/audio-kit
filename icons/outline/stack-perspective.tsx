import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective({
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
          d="M3.25,12.25l-.842,.281c-.324,.108-.658-.133-.658-.474V5.944c0-.341,.334-.582,.658-.474l.842,.281"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25,14.125l-.808,.337c-.329,.137-.692-.105-.692-.462V4c0-.357,.363-.599,.692-.462l.808,.337"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.46,1.827l5.21,2.404c.354,.163,.581,.518,.581,.908v7.72c0,.39-.227,.745-.581,.908l-5.21,2.404c-.331,.153-.71-.089-.71-.454V2.281c0-.365,.378-.607,.71-.454Z"
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

export default StackPerspective;
