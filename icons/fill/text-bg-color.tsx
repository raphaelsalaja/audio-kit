import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextBgColor({
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
        <polygon fill={fill} points="7.96 10 10.04 10 9 7.525 7.96 10" />
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-1.161,10.941c-.095,.04-.193,.059-.29,.059-.293,0-.571-.172-.692-.459l-.437-1.041h-3.34l-.437,1.041c-.161,.382-.6,.562-.982,.401-.382-.16-.562-.6-.401-.982l2.73-6.5c.117-.278,.39-.459,.691-.459h.136c.302,0,.575,.181,.691,.459l2.73,6.5c.161,.382-.019,.822-.401,.982Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextBgColor;
