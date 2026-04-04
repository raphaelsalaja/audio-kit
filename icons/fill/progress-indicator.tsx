import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressIndicator({
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
          d="M15.25,9.5H2.75c-.965,0-1.75,.785-1.75,1.75v3c0,.965,.785,1.75,1.75,1.75H15.25c.965,0,1.75-.785,1.75-1.75v-3c0-.965-.785-1.75-1.75-1.75Zm.25,4.75c0,.138-.112,.25-.25,.25h-6.25v-3.5h6.25c.138,0,.25,.112,.25,.25v3Z"
          fill={fill}
        />
        <path
          d="M7.867,7.353c.237,.408,.661,.651,1.133,.651s.896-.243,1.133-.651l1.971-3.378c.239-.411,.24-.902,.003-1.314-.236-.412-.662-.657-1.137-.657h-3.939c-.475,0-.9,.246-1.137,.657-.237,.412-.236,.903,.004,1.315l1.97,3.377Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ProgressIndicator;
