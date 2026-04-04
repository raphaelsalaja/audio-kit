import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolDownRight({
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
          d="M14,14.75c-.192,0-.384-.073-.53-.22L3.22,4.28c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0L14.53,13.47c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M8.239,15c-.283,0-.555-.162-.682-.436-.173-.376-.009-.822,.368-.995,2.052-.946,3.854-.855,5.07-.572-.281-1.218-.373-3.019,.573-5.071,.174-.376,.62-.539,.994-.367,.377,.173,.541,.619,.367,.995-1.365,2.963-.089,5.221-.034,5.316,.172,.295,.123,.671-.12,.912-.242,.241-.614,.288-.91,.113-.091-.054-2.348-1.33-5.313,.037-.102,.047-.208,.069-.313,.069Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolDownRight;
