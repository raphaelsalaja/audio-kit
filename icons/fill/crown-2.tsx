import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crown2({
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
          d="m16.6421,4.6108c-.2612-.1611-.5967-.146-.8423.0391l-3.3301,2.4976-2.8242-4.7788c-.2695-.457-1.0215-.457-1.291,0l-2.8242,4.7788-3.3301-2.4976c-.2466-.1851-.5806-.2007-.8423-.0391-.2622.1606-.3999.4653-.3467.7686l1.46,8.3447c.231,1.3188,1.3701,2.2759,2.709,2.2759h7.6396c1.3389,0,2.478-.957,2.709-2.2759l1.46-8.3447c.0532-.3032-.0845-.6079-.3467-.7686Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Crown2;
